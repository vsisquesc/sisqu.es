<template>
  <Menu />
  <AppBar />
  <Minimize v-if="!store.empty() && !store.hasFullScreen()" />
  <Window
    v-for="window in store.queue"
    :key="window.href"
    :window-data="window"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'desktop',
})

import { WindowManager } from '~/stores/Queue';

const store = WindowManager();
</script>
