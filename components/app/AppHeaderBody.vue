<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { homeSectionLinks, resumeUrl, showResume } from '../../utils/homeSections'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { subNavigationMode } = useSubNavigation()

const contentNavVariants = useUIConfig('contentNavigation')

const items = computed<ContentNavigationItem[]>(() => {
  const nav = navigation?.value || []
  if (!subNavigationMode.value) return nav
  return nav.map(({ children, ...item }) => ({
    ...item,
    path: children?.length ? getFirstPagePath({ ...item, children }) : item.path,
  }))
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <UNavigationMenu
      :items="homeSectionLinks"
      orientation="vertical"
      variant="link"
    />

    <UButton
      v-if="showResume"
      :to="resumeUrl"
      target="_blank"
      variant="outline"
      block
      trailing-icon="i-lucide-arrow-down"
    >
      下載履歷
    </UButton>

    <USeparator />

    <UContentNavigation
      collapsible
      default-open
      :highlight="contentNavVariants.highlight ?? true"
      :highlight-color="contentNavVariants.highlightColor"
      :variant="contentNavVariants.variant ?? 'link'"
      :color="contentNavVariants.color"
      :navigation="items"
    />
  </div>
</template>
