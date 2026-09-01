<script setup lang="ts">
import gsap from 'gsap'

const props = withDefaults(defineProps<{
  image?: string
  imageAlt?: string
  /** 工作習慣卡片標題 */
  habitsTitle?: string
  /** 工作習慣項目，格式 `icon|文字` */
  habits?: string[]
  /** 思考泡輪播的文字 */
  thoughts?: string[]
}>(), {
  image: '/images/arong-cat-think.png',
  imageAlt: '阿榮的貓托腮思考',
  habitsTitle: '工作時，我習慣',
  habits: () => [
    'i-lucide-clipboard-check|先確認需求',
    'i-lucide-flask-conical|查資料、動手試',
    'i-lucide-messages-square|和團隊討論',
  ],
  thoughts: () => [
    '<需求 />',
    '{ 為什麼？ }',
    '[ 使用情境 ]',
    '✓ 想清楚了',
  ],
})

const stage = ref<HTMLElement>()
const frame = ref<HTMLElement>()
const framePath = ref<SVGPathElement>()
const ripples = ref<SVGGElement>()
const bubbleText = ref<HTMLElement>()
const thought = ref(props.thoughts[0])

// 點陣：固定格子搭配隨機延遲，做出緩慢波動
const dots = Array.from({ length: 24 }, (_, i) => ({
  x: (i % 6) * 12 + 4,
  y: Math.floor(i / 6) * 12 + 4,
  delay: `${((i * 37) % 24) / 8}s`,
}))

let ctx: gsap.Context | undefined
let onMove: ((e: PointerEvent) => void) | undefined
let onEnter: (() => void) | undefined
let onLeave: (() => void) | undefined
let hoverTarget: Element | undefined
let thoughtLoop: gsap.core.Timeline | undefined

onMounted(() => {
  if (!document.documentElement.classList.contains('js-anim')) return

  ctx = gsap.context(() => {
    // 線框描邊進場
    const path = framePath.value
    if (path) {
      const len = path.getTotalLength()
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })
      gsap.to(path, { strokeDashoffset: 0, duration: 1.4, delay: 0.5, ease: 'power2.inOut' })
    }

    // 呼吸浮動
    gsap.to('.hero-visual__cat', {
      y: -8,
      duration: 3.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    })

    // 思考泡：進場後開始輪播
    thoughtLoop = gsap.timeline({ repeat: -1, delay: 1.6 })
    const tl = thoughtLoop
    props.thoughts.forEach((text, i) => {
      tl.set(thought, { value: text }, i === 0 ? 0 : '>')
        .fromTo(bubbleText.value!, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.4, ease: 'power2.out' })
        .to(bubbleText.value!, { yPercent: -40, opacity: 0, duration: 0.35, ease: 'power2.in' }, '+=2.2')
    })
    gsap.to('.hero-visual__bubble', { opacity: 1, scale: 1, duration: 0.5, delay: 1.4, ease: 'back.out(1.6)' })

    // hover 到貓身上：線框像漣漪一路往外擴散，貓咪水平翻轉
    const catLayer0 = stage.value?.querySelector('.hero-visual__parallax')
    const rippleEls = ripples.value ? Array.from(ripples.value.children) : []
    const catEl = stage.value?.querySelector('.hero-visual__cat')

    if (catLayer0 && frame.value && rippleEls.length && catEl) {
      gsap.set(rippleEls, { opacity: 0, transformOrigin: '50% 50%' })

      const ripple = gsap.timeline({ repeat: -1, paused: true })
      rippleEls.forEach((el, i) => {
        ripple.fromTo(el,
          { scale: 1, opacity: 0.9, strokeWidth: 3 },
          { scale: 1.9, opacity: 0, strokeWidth: 1, duration: 1.1, ease: 'power1.out' },
          i * 0.22,
        )
      })

      // OIIA 旋轉貓：hover 時繞 Y 軸自轉，轉速逐漸飆起來
      // 不加 perspective，轉起來就是原地壓扁再展開，不會往前放大
      const spin = gsap.to(catEl, {
        rotationY: '+=360',
        transformOrigin: '50% 50%',
        duration: 0.9,
        ease: 'none',
        repeat: -1,
        paused: true,
      })
      spin.timeScale(0.35)

      // hover 期間的節奏：加速轉 3 秒 → 煞停回正面 → 停 2 秒 → 再來一輪
      const cycle = gsap.timeline({ repeat: -1, paused: true })
      cycle
        .set(spin, { timeScale: 0.35 })
        .add(() => spin.play())
        .to(spin, { timeScale: 4, duration: 1.2, ease: 'power2.in' })
        .to(spin, { timeScale: 4, duration: 1.8 })
        .to(spin, { timeScale: 0.6, duration: 0.5, ease: 'power2.out' })
        .add(() => {
          spin.pause()
          // 停在正面，不要停在被壓扁的角度
          gsap.to(catEl, {
            rotationY: gsap.utils.snap(360, gsap.getProperty(catEl, 'rotationY') as number),
            duration: 0.35,
            ease: 'power2.out',
          })
        })
        .to({}, { duration: 2 })

      onEnter = () => {
        // OIIA OIIA：五一一二一
        thoughtLoop?.pause()
        gsap.set(bubbleText.value!, { yPercent: 0, opacity: 1 })
        thought.value = '5 1 1 2 1'
        ripple.play(0)
        gsap.to(frame.value!, { opacity: 1, duration: 0.3 })
        cycle.restart(true)
        gsap.to(ripple, { timeScale: 2, duration: 1.4, ease: 'power2.in' })
      }

      onLeave = () => {
        thoughtLoop?.restart(true)
        cycle.pause()
        gsap.to(rippleEls, { opacity: 0, duration: 0.25, onComplete: () => ripple.pause(0) })
        gsap.to(frame.value!, { opacity: 0.55, duration: 0.4 })
        gsap.to(ripple, { timeScale: 1, duration: 0.4 })
        // 減速煞停，並轉回正面
        gsap.to(spin, {
          timeScale: 0.35,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            spin.pause()
            gsap.to(catEl, { rotationY: 0, duration: 0.4, ease: 'power2.out' })
          },
        })
      }

      catLayer0.addEventListener('pointerenter', onEnter)
      catLayer0.addEventListener('pointerleave', onLeave)
      hoverTarget = catLayer0
    }

    // 滑鼠視差：只在有游標的裝置啟用
    if (!window.matchMedia('(hover: hover)').matches) return

    const catLayer = stage.value?.querySelector('.hero-visual__parallax')
    if (!catLayer || !frame.value) return

    const moveCat = gsap.quickTo(catLayer, 'x', { duration: 0.6, ease: 'power3' })
    const moveCatY = gsap.quickTo(catLayer, 'y', { duration: 0.6, ease: 'power3' })
    const moveFrame = gsap.quickTo(frame.value, 'x', { duration: 0.9, ease: 'power3' })
    const moveFrameY = gsap.quickTo(frame.value, 'y', { duration: 0.9, ease: 'power3' })

    onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      moveCat(nx * 8)
      moveCatY(ny * 8)
      moveFrame(nx * -4)
      moveFrameY(ny * -4)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
  }, stage.value)
})

onBeforeUnmount(() => {
  if (onMove) window.removeEventListener('pointermove', onMove)
  if (hoverTarget && onEnter) hoverTarget.removeEventListener('pointerenter', onEnter)
  if (hoverTarget && onLeave) hoverTarget.removeEventListener('pointerleave', onLeave)
  ctx?.revert()
})
</script>

<template>
  <div ref="stage" class="hero-visual">
    <!-- 線框裝飾（視差跟著這層一起動） -->
    <div ref="frame" class="hero-visual__frames" aria-hidden="true">
      <svg
        class="hero-visual__frame"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          ref="framePath"
          d="M60 30 H340 A30 30 0 0 1 370 60 V340 A30 30 0 0 1 340 370 H60 A30 30 0 0 1 30 340 V60 A30 30 0 0 1 60 30 Z"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>

      <!-- 漣漪：獨立一層，viewBox 留白讓它能擴散出框外 -->
      <svg
        class="hero-visual__ripples"
        viewBox="-100 -100 600 600"
        fill="none"
      >
        <g ref="ripples">
          <path
            v-for="n in 4"
            :key="n"
            d="M60 30 H340 A30 30 0 0 1 370 60 V340 A30 30 0 0 1 340 370 H60 A30 30 0 0 1 30 340 V60 A30 30 0 0 1 60 30 Z"
            stroke="currentColor"
            stroke-width="3"
            fill="none"
            opacity="0"
          />
        </g>
      </svg>
    </div>

    <!-- 點陣裝飾 -->
    <svg
      class="hero-visual__dots"
      viewBox="0 0 72 48"
      aria-hidden="true"
    >
      <circle
        v-for="(dot, i) in dots"
        :key="i"
        :cx="dot.x"
        :cy="dot.y"
        r="1.5"
        fill="currentColor"
        :style="{ animationDelay: dot.delay }"
      />
    </svg>

    <div class="hero-visual__parallax">
      <img
        :src="image"
        :alt="imageAlt"
        class="hero-visual__cat"
        width="520"
        height="520"
        loading="eager"
      >

      <!-- 思考泡 -->
      <div class="hero-visual__bubble" aria-hidden="true">
        <span ref="bubbleText" class="hero-visual__thought">{{ thought }}</span>
        <span class="hero-visual__caret">|</span>
      </div>
    </div>

    <div class="hero-visual__card">
      <p class="hero-visual__card-title">
        {{ habitsTitle }}
      </p>
      <ul class="hero-visual__list">
        <li
          v-for="habit in habits"
          :key="habit"
          class="hero-visual__item"
        >
          <span class="hero-visual__icon">
            <UIcon :name="habit.split('|')[0] || 'i-lucide-check'" />
          </span>
          {{ habit.split('|')[1] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 22rem;
  color: var(--ui-primary);
}

.hero-visual__frames {
  position: absolute;
  inset: 0;
  opacity: 0.55;
}

.hero-visual__frame,
.hero-visual__ripples {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.hero-visual__dots {
  position: absolute;
  right: 4%;
  bottom: 20%;
  width: 5.5rem;
  height: 3.7rem;
  opacity: 0.5;
}

.hero-visual__dots circle {
  animation: dot-wave 3s ease-in-out infinite;
}

@keyframes dot-wave {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
}

.hero-visual__parallax {
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: min(100%, 26rem);
}

.hero-visual__cat {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 24px rgb(0 0 0 / 0.12));
}

/* 思考泡 */
.hero-visual__bubble {
  position: absolute;
  top: 2%;
  right: -8%;
  display: flex;
  align-items: center;
  gap: 0.125rem;
  height: 2.5rem;
  padding: 0 0.875rem;
  border: 2px solid var(--ui-primary);
  border-radius: 1rem 1rem 1rem 0.25rem;
  background: var(--ui-bg);
  color: var(--ui-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
}

html.js-anim .hero-visual__bubble {
  opacity: 0;
  transform: scale(0.9);
}

.hero-visual__caret {
  animation: caret 1s step-end infinite;
}

@keyframes caret {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.hero-visual__card {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1rem 1.25rem;
  border: 1px solid var(--ui-border);
  border-radius: 1rem;
  background: var(--ui-bg);
  box-shadow: 0 12px 32px rgb(0 0 0 / 0.1);
}

.hero-visual__card-title {
  margin: 0 0 0.75rem;
  color: var(--ui-primary);
  font-size: 0.875rem;
  font-weight: 700;
}

.hero-visual__list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.hero-visual__item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: var(--ui-text-highlighted);
  font-size: 0.9375rem;
}

.hero-visual__icon {
  display: grid;
  place-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid var(--ui-border-accented);
  border-radius: 0.5rem;
  color: var(--ui-primary);
}

@media (prefers-reduced-motion: reduce) {
  .hero-visual__dots circle,
  .hero-visual__caret {
    animation: none;
  }
}

@media (max-width: 767px) {
  .hero-visual {
    flex-direction: column;
  }

  .hero-visual__card {
    position: static;
    margin-top: 1rem;
  }

  .hero-visual__bubble {
    right: 0;
  }
}
</style>
