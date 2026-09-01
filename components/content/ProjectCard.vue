<script setup lang="ts">
import { formatTenure } from '../../utils/tenure'

const props = defineProps<{
  /** 專案類型標籤，例如「SAAS PLATFORM」 */
  type?: string
  title: string
  /** 擔任角色 */
  role?: string
  /** 起始日，格式 YYYY-MM-DD */
  start?: string
  /** 結束日，留空代表到今天 */
  end?: string
  /** 顯示用的期間文字，例如「2024/11 ～ 2026/08」 */
  range?: string
  /** 代表技術，最多 5 個 */
  tech?: string[]
  /** 專案詳情頁或線上網站，有值才顯示入口 */
  to?: string
  /** 入口文字，預設「查看案例」 */
  linkLabel?: string
  /** hover 時從卡片後方探頭的貓圖 */
  catImage?: string
}>()

// 外部網址另開新分頁
const isExternal = computed(() => !!props.to && /^https?:\/\//.test(props.to))

// SSR 先算一次，掛載後再用瀏覽器當下時間更新，避免 hydration 不一致
const tenure = ref(props.start ? formatTenure(props.start, props.end) : '')
onMounted(() => {
  if (props.start) tenure.value = formatTenure(props.start, props.end)
})
</script>

<template>
  <div class="project-card-wrap reveal">
    <img
      :src="catImage || '/images/arong-cat-think.png'"
      alt=""
      aria-hidden="true"
      loading="lazy"
      class="project-card__cat"
    >

    <component
      :is="to ? 'a' : 'div'"
      :href="to"
      :target="isExternal ? '_blank' : undefined"
      :rel="isExternal ? 'noopener noreferrer' : undefined"
      class="project-card"
      :class="{ 'project-card--link': to }"
    >
      <p v-if="type" class="project-card__type">
        {{ type }}
      </p>

      <h3 class="project-card__title">
        {{ title }}
      </h3>

      <p v-if="role" class="project-card__role">
        {{ role }}
      </p>

      <p v-if="tenure || range" class="project-card__period">
        <span v-if="tenure" class="project-card__tenure">{{ tenure }}</span>
        <span v-if="range" class="project-card__range">{{ range }}</span>
      </p>

      <div class="project-card__body">
        <slot />
      </div>

      <div class="project-card__footer">
        <ul v-if="tech?.length" class="project-card__tech">
          <li v-for="item in tech" :key="item" class="project-card__tag">
            {{ item }}
          </li>
        </ul>

        <span v-if="to" class="project-card__cta">
          {{ linkLabel || '查看案例' }}
          <UIcon
            :name="isExternal ? 'i-lucide-external-link' : 'i-lucide-arrow-right'"
            class="project-card__arrow"
          />
        </span>
      </div>
    </component>
  </div>
</template>

<style scoped>
.project-card-wrap {
  position: relative;
  height: 100%;
}

.project-card__cat {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 1.5rem;
  width: 5.5rem;
  height: auto;
  opacity: 0;
  pointer-events: none;
  transform: translateY(35%) rotate(0) scale(0.9);
  transform-origin: bottom center;
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.project-card-wrap:hover .project-card__cat {
  opacity: 1;
  transform: translateY(-46%) rotate(-6deg) scale(1);
}

.project-card {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  border: 1px solid var(--ui-border);
  border-radius: 0.75rem;
  background: var(--ui-bg);
  color: inherit;
  text-decoration: none;
}

.project-card--link {
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.project-card--link:hover {
  transform: translateY(-3px);
  border-color: var(--ui-primary);
  box-shadow: 0 10px 24px rgb(0 0 0 / 0.08);
}

.project-card__type {
  margin: 0 0 0.5rem;
  color: var(--ui-primary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
}

.project-card__title {
  margin: 0;
  color: var(--ui-text-highlighted);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.35;
}

.project-card__role {
  margin: 0.75rem 0 0;
  color: var(--ui-text-highlighted);
  font-size: 1rem;
  font-weight: 600;
}

.project-card__period {
  display: flex;
  align-items: baseline;
  gap: 0.625rem;
  margin: 0.25rem 0 0;
}

.project-card__tenure {
  color: var(--ui-primary);
  font-size: 0.9375rem;
  font-weight: 700;
}

.project-card__range {
  color: var(--ui-text-dimmed);
  font-size: 0.875rem;
}

.project-card__body {
  margin-top: 1.25rem;
  color: var(--ui-text-toned);
  font-size: 0.9375rem;
  line-height: 1.8;
}

.project-card__body :deep(p) {
  margin: 0 0 0.75rem;
}

.project-card__body :deep(ul) {
  margin: 0;
  padding-left: 1.1rem;
  list-style: disc;
}

.project-card__body :deep(li) {
  margin: 0.25rem 0;
}

/* 標籤與入口固定在卡片底部，三張卡片才對得齊 */
.project-card__footer {
  margin-top: auto;
  padding-top: 1.5rem;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-card__tag {
  padding: 0.125rem 0.5rem;
  border-radius: 0.375rem;
  background: var(--ui-primary)/10;
  background-color: color-mix(in oklab, var(--ui-primary) 12%, transparent);
  color: var(--ui-primary);
  font-size: 0.75rem;
  font-weight: 500;
}

.project-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 1rem;
  color: var(--ui-primary);
  font-size: 0.875rem;
  font-weight: 600;
}

.project-card__arrow {
  transition: transform 0.2s;
}

.project-card--link:hover .project-card__arrow {
  transform: translateX(3px);
}

@media (hover: none), (prefers-reduced-motion: reduce) {
  .project-card__cat {
    display: none;
  }
}
</style>
