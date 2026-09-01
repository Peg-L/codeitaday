import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * 首頁動畫：Hero 進場 + 區塊捲動進場。
 * 初始隱藏由 app.css 的 `html.js-anim` 控制，
 * 旗標在 nuxt.config 的 inline script 中於首次繪製前掛上，
 * 使用者若開啟 prefers-reduced-motion 就完全不啟用。
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (!document.documentElement.classList.contains('js-anim')) return

  gsap.registerPlugin(ScrollTrigger)

  const pawListeners: Array<{
    element: Element
    handler: (event: PointerEvent) => void
  }> = []
  let pawLayer: HTMLDivElement | null = null
  let activePaws: SVGSVGElement[] = []

  const removePaw = (paw: SVGSVGElement) => {
    const index = activePaws.indexOf(paw)
    if (index !== -1) activePaws.splice(index, 1)
    paw.remove()
  }

  const cleanupPaws = () => {
    pawListeners.forEach(({ element, handler }) => {
      element.removeEventListener('pointermove', handler)
    })
    pawListeners.length = 0

    activePaws.forEach((paw) => {
      gsap.killTweensOf(paw)
      paw.remove()
    })
    activePaws = []
    pawLayer?.remove()
    pawLayer = null
  }

  const createPaw = (x: number, y: number) => {
    if (!pawLayer) return

    const namespace = 'http://www.w3.org/2000/svg'
    const paw = document.createElementNS(namespace, 'svg')
    paw.setAttribute('viewBox', '0 0 44 44')
    paw.setAttribute('aria-hidden', 'true')
    Object.assign(paw.style, {
      position: 'absolute',
      left: `${x - 16}px`,
      top: `${y - 16}px`,
      width: '32px',
      height: '32px',
      color: 'var(--ui-primary)',
      overflow: 'visible',
      transform: `rotate(${gsap.utils.random(-25, 25)}deg)`,
    })

    const shapes = [
      ['ellipse', { cx: '22', cy: '28', rx: '9', ry: '8' }],
      ['circle', { cx: '9', cy: '17', r: '4' }],
      ['circle', { cx: '17', cy: '10', r: '4' }],
      ['circle', { cx: '27', cy: '10', r: '4' }],
      ['circle', { cx: '35', cy: '17', r: '4' }],
    ] as const

    shapes.forEach(([tag, attributes]) => {
      const shape = document.createElementNS(namespace, tag)
      Object.entries(attributes).forEach(([name, value]) => shape.setAttribute(name, value))
      shape.setAttribute('fill', 'currentColor')
      paw.appendChild(shape)
    })

    pawLayer.appendChild(paw)
    activePaws.push(paw)

    if (activePaws.length > 12) {
      const oldest = activePaws.shift()
      if (oldest) {
        gsap.killTweensOf(oldest)
        oldest.remove()
      }
    }

    gsap.fromTo(paw,
      { opacity: 0, scale: 0.6 },
      { opacity: 0.35, scale: 1, duration: 0.25 },
    )
    gsap.to(paw, {
      opacity: 0,
      duration: 0.8,
      delay: 1.2,
      onComplete: () => removePaw(paw),
    })
  }

  const pawTrails = () => {
    cleanupPaws()
    if (!window.matchMedia('(hover: hover)').matches) return

    const cards = document.querySelectorAll('.paw')
    if (!cards.length) return

    pawLayer = document.createElement('div')
    pawLayer.className = 'paw-layer'
    Object.assign(pawLayer.style, {
      position: 'fixed',
      inset: '0',
      pointerEvents: 'none',
      zIndex: '30',
    })
    document.body.appendChild(pawLayer)

    cards.forEach((card) => {
      let lastPosition: { x: number, y: number } | null = null
      const handler = (event: PointerEvent) => {
        const distance = lastPosition
          ? Math.hypot(event.clientX - lastPosition.x, event.clientY - lastPosition.y)
          : Infinity

        if (distance < 80) return
        lastPosition = { x: event.clientX, y: event.clientY }
        createPaw(event.clientX, event.clientY)
      }

      card.addEventListener('pointermove', handler, { passive: true })
      pawListeners.push({ element: card, handler })
    })
  }

  const heroIn = () => {
    const hero = document.querySelector('.anim-hero')
    if (!hero) return

    const targets = [
      '[data-slot="headline"]',
      '[data-slot="title"]',
      '[data-slot="description"]',
      '[data-slot="links"]',
    ].map(sel => hero.querySelector(sel)).filter(Boolean) as Element[]

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.to(targets, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 })
      .to('.hero-visual', { opacity: 1, scale: 1, duration: 0.6 }, '-=0.35')
      .to('.hero-visual__card', { opacity: 1, y: 0, duration: 0.4 }, '-=0.25')
      .to('.hero-visual__item', { opacity: 1, x: 0, duration: 0.3, stagger: 0.08 }, '-=0.15')
  }

  const revealOnScroll = () => {
    const items = gsap.utils.toArray<HTMLElement>('.reveal')
    if (!items.length) return

    ScrollTrigger.batch(items, {
      start: 'top 85%',
      once: true,
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      }),
    })
  }

  const play = () => {
    ScrollTrigger.getAll().forEach(t => t.kill())
    pawTrails()
    heroIn()
    revealOnScroll()
  }

  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(() => requestAnimationFrame(play))
  })

  nuxtApp.hook('app:beforeUnmount', cleanupPaws)
})
