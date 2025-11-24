<template>
  <Basic-Button @mousedown="scrollUp">
    <Icon
      name="material-symbols:arrow-upward-rounded"
      :style="colorMode.value != 'light' ? 'color: black' : 'color:white'"
    />
  </Basic-Button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

function scrollUp() {
  if (import.meta.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animación suave
    });
  }
}
</script>

<style lang="postcss" scoped>
.header-wrapper {
  background-color: var(--color-background);
  @apply fixed flex w-full justify-between px-2 h-16 items-center z-10;
}
</style>
