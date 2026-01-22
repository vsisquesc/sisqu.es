<script setup lang="ts">
// const maxW: globalThis.Ref<number> = ref(-1);
// const maxH: globalThis.Ref<number> = ref(-1);

// const appRef: globalThis.Ref<HTMLElement | null> = ref(null);

// function map01ToRange(t: number, min: number, max: number): number {
//   return t * (max - min) + min;
// }

// const onMove = (e: MouseEvent) => {
//   if (!appRef.value) {
//     return;
//   }
//   // variaciones del 10%
//   const xPercent = map01ToRange(e.clientX / maxW.value, -10, 10);
//   const yPercent = map01ToRange(e.clientY / maxH.value, -10, 10);
//   console.log(xPercent);
//   console.log(yPercent);
//   appRef.value.style.backgroundPosition = `${50 + xPercent}% ${50 + yPercent}%`;
// };
// const onUpdate = () => {
//   maxW.value = window.innerWidth;
//   maxH.value = window.innerHeight;
// };

// onMounted(() => {
//   onUpdate();
//   window.addEventListener('mousemove', onMove);
//   window.addEventListener('resize', onUpdate);
// });
// onBeforeUnmount(() => {
//   window.removeEventListener('mousemove', onMove);
//   window.removeEventListener('resize', onUpdate);
// });
</script>

<template>
  <div class="app" ref="appRef">
    <main class="content">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.app {
  width: 100dvw;
  min-height: 100dvh;
  display: flex;

  background-image: url('/img/mitsubishi-fto-1.webp');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
