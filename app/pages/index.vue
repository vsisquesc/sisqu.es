<template>
  <Menu />
  <Social />
  <Minimize v-if="!store.empty()" />
  <Window
    v-for="window in store.queue"
    :key="window.href"
    :window-data="window"
  />
</template>

<script setup lang="ts">
import { WindowManager } from '~/stores/Queue';

const store = WindowManager();
</script>
