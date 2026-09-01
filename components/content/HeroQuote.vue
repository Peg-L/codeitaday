<script setup lang="ts">
withDefaults(defineProps<{
  author?: string
  avatar?: string
  avatarAlt?: string
}>(), {
  avatar: '/images/arong-cat-mic.png',
  avatarAlt: '阿榮的貓拿著麥克風',
})
</script>

<template>
  <div class="hero-quote">
    <img
      v-if="avatar"
      :src="avatar"
      :alt="avatarAlt"
      class="hero-quote__avatar"
      width="180"
      height="180"
      loading="eager"
    >

    <div class="hero-quote__col">
      <div class="hero-quote__bubble">
        <span class="hero-quote__mark" aria-hidden="true">「</span>
        <div class="hero-quote__body">
          <slot />
        </div>
        <span class="hero-quote__mark hero-quote__mark--end" aria-hidden="true">」</span>
      </div>
      <p v-if="author" class="hero-quote__author">
        —— {{ author }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.hero-quote {
  --quote-accent: var(--ui-primary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  max-width: 44rem;
}

.hero-quote__avatar {
  width: 7rem;
  height: auto;
  margin-left: 0.5rem;
  filter: drop-shadow(0 6px 12px rgb(0 0 0 / 0.12));
}

.hero-quote__col {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.hero-quote__bubble {
  position: relative;
  display: flex;
  gap: 0.25rem;
  padding: 1.25rem 1.5rem;
  border: 2px solid var(--quote-accent);
  border-radius: 1rem;
  background: var(--ui-bg-elevated);
  box-shadow: 4px 4px 0 0 var(--quote-accent);
}

/* 對話框尾巴：外框 + 內填色兩層疊出邊線，指向上方的貓 */
.hero-quote__bubble::before,
.hero-quote__bubble::after {
  content: '';
  position: absolute;
  left: 2.25rem;
  width: 0;
  height: 0;
  border-style: solid;
}

.hero-quote__bubble::before {
  top: -14px;
  border-width: 0 14px 14px 0;
  border-color: transparent var(--quote-accent) transparent transparent;
}

.hero-quote__bubble::after {
  top: -10px;
  border-width: 0 11px 11px 0;
  border-color: transparent var(--ui-bg-elevated) transparent transparent;
}

.hero-quote__mark {
  flex: none;
  color: var(--quote-accent);
  font-size: 1.5rem;
  line-height: 1.2;
}

.hero-quote__mark--end {
  align-self: flex-end;
}

.hero-quote__body {
  color: var(--ui-text-highlighted);
  font-size: 1.0625rem;
  line-height: 1.9;
  letter-spacing: 0.02em;
  text-align: left;
}

.hero-quote__body :deep(p) {
  margin: 0;
}

.hero-quote__author {
  align-self: flex-end;
  margin: 0.5rem 0 0;
  color: var(--ui-text-muted);
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .hero-quote {
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }

  .hero-quote__avatar {
    width: 9rem;
    margin-left: 0;
  }

  /* 桌機：尾巴改指左邊的貓 */
  .hero-quote__bubble::before,
  .hero-quote__bubble::after {
    left: auto;
    top: auto;
  }

  .hero-quote__bubble::before {
    left: -14px;
    top: 2.5rem;
    border-width: 14px 14px 0 0;
    border-color: var(--quote-accent) transparent transparent transparent;
  }

  .hero-quote__bubble::after {
    left: -10px;
    top: 2.75rem;
    border-width: 11px 11px 0 0;
    border-color: var(--ui-bg-elevated) transparent transparent transparent;
  }

  .hero-quote__body {
    font-size: 1.125rem;
  }
}
</style>
