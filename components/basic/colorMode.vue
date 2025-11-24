<template>
  <Basic-Button @mousedown="iterateMode">
    <Icon
      v-if="colorMode.value != 'light'"
      name="material-symbols:light-mode"
      style="color: black"
    />
    <Icon v-else name="material-symbols:dark-mode" style="color: white" />
  </Basic-Button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const modes = ["light", "dark"];

function iterateMode() {
  var currentMode = colorMode.preference;
  if (currentMode == "system") {
    currentMode = colorMode.value;
  }

  const newIndex = (modes.indexOf(currentMode) + 1) % modes.length;
  colorMode.preference = modes[newIndex];
}
</script>

<style lang="postcss" scoped>
.header-wrapper {
  background-color: var(--color-background);
  @apply fixed flex w-full justify-between px-2 h-16 items-center z-10;
}
</style>
