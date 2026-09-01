<script setup lang="ts">
// Bound dynamically so Vue's asset transform does not hand the path to Vite's
// public-dir resolution, which 400s under vite-node in dev.
const src = '/Arong.png'
</script>

<template>
  <img :src="src" alt="Arong">
</template>
