<template>
  <div class="component-wrapper full">
    <Basic-Link @click="onLinkClick" href="/Photos">{{
      $t("links.photos")
    }}</Basic-Link>
    <Basic-Link @click="onLinkClick" href="/Music">{{
      $t("links.music")
    }}</Basic-Link>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["onLinkClick"]);

function onLinkClick() {
  nextTick(() => {
    emit("onLinkClick");
  });
}
</script>

<style lang="postcss" scoped>
.full {
  @apply h-screen -mt-16;
}
</style>
