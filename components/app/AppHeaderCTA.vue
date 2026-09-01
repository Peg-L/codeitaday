<script setup lang="ts">
import { homeSectionLinks, resumeUrl, showResume } from '../../utils/homeSections'

const route = useRoute()
// 首頁是一頁式作品集，不需要搜尋；筆記頁才顯示
const isLanding = computed(() => route.path === '/')

// docus 的 AppHeader 在手機版另外放了一顆搜尋鈕，用 html 上的旗標搭配 app.css 隱藏
useHead({
  htmlAttrs: computed(() => (isLanding.value ? { 'data-landing': 'true' } : {})),
})
</script>

<template>
  <div class="hidden items-center gap-2 lg:flex">
    <UNavigationMenu
      :items="homeSectionLinks"
      variant="link"
    />

    <UContentSearchButton
      v-if="!isLanding"
      collapsed
      variant="ghost"
      color="neutral"
    />

    <UButton
      v-if="showResume"
      :to="resumeUrl"
      target="_blank"
      variant="outline"
      trailing-icon="i-lucide-arrow-down"
    >
      下載履歷
    </UButton>
  </div>
</template>
