<template>
  <!-- <div class="layout-wrapper"> -->
  <div>
    <div class="bg-slate-50 md:py-10">
      <div class="default-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss" scoped>
.default-wrapper {
  @apply mx-auto flex w-full flex-col items-start
  justify-start gap-6 px-5 md:pb-4 xl:max-w-[82rem] 2xl:px-0;
}
.default-wrapper .wrapper {
  @apply flex w-full flex-col items-start justify-start
  gap-8 md:gap-16;
}
h1,
h2 {
  @apply relative bg-opacity-100  font-semibold text-red-500;
}
h1 {
  @apply text-lg md:text-4xl;
}
h2 {
  @apply text-xl md:text-3xl;
}
h3 {
  @apply text-xl font-semibold text-slate-600;
}
h1::before,
h2::before {
  content: '';
  @apply absolute -bottom-2 left-0 h-[1px] w-12 rounded-md bg-red-500 md:h-[2.5px] md:w-16;
}
p {
  @apply max-w-4xl text-base;
}
</style>