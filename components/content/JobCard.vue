<script setup lang="ts">
import { formatTenure } from '../../utils/tenure'

const props = defineProps<{
  icon?: string
  /** 職稱，卡片主標 */
  role: string
  /** 公司名稱，次要資訊 */
  company?: string
  /** 起始日，格式 YYYY-MM-DD */
  start: string
  /** 結束日，留空代表到今天 */
  end?: string
  /** 顯示用的期間文字，例如「2024/06/24 ～ 至今」 */
  range?: string
}>()

// SSR 先算一次，掛載後再用瀏覽器當下時間更新，避免 hydration 不一致
const tenure = ref(formatTenure(props.start, props.end))
onMounted(() => {
  tenure.value = formatTenure(props.start, props.end)
})
</script>

<template>
  <div class="job-card reveal paw">
    <UIcon
      v-if="icon"
      :name="icon"
      class="job-card__icon"
    />

    <div class="job-card__row">
      <h3 class="job-card__role">
        {{ role }}
      </h3>
      <span class="job-card__tenure">{{ tenure }}</span>
    </div>

    <div class="job-card__row job-card__row--sub">
      <p class="job-card__company">
        {{ company }}
      </p>
      <span class="job-card__range">{{ range }}</span>
    </div>

    <hr class="job-card__divider">

    <div class="job-card__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.job-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
  border: 1px solid var(--ui-border);
  border-radius: 0.75rem;
  background: var(--ui-bg);
}

.job-card__icon {
  width: 1.75rem;
  height: 1.75rem;
  margin-bottom: 1.25rem;
  color: var(--ui-primary);
}

.job-card__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.job-card__row--sub {
  margin-top: 0.25rem;
}

.job-card__role {
  margin: 0;
  color: var(--ui-text-highlighted);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.job-card__tenure {
  flex: none;
  color: var(--ui-primary);
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
}

.job-card__company {
  margin: 0;
  color: var(--ui-text-muted);
  font-size: 0.9375rem;
}

.job-card__range {
  flex: none;
  color: var(--ui-text-dimmed);
  font-size: 0.9375rem;
  white-space: nowrap;
}

.job-card__divider {
  margin: 1.25rem 0;
  border: 0;
  border-top: 1px solid var(--ui-border);
}

.job-card__body {
  color: var(--ui-text-toned);
  line-height: 1.9;
}

.job-card__body :deep(p) {
  margin: 0;
}

@media (max-width: 639px) {
  .job-card__row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
