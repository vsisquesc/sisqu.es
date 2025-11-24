<template>
  <div class="content">
    <Main-Header :showMenu="isIndexPage" />
    <div class="page-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const isIndexPage = route.path === "/";
</script>

<style lang="postcss">
html {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  filter: grayscale(100%);
}
</style>

<style lang="postcss" scoped>
.content {
  @apply font-DMsans;
}
</style>
