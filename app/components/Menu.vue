<template>
  <div class="menu container" ref="menuRef">
    <h1 class="title" ref="titleRef">SISQU.ES</h1> 
    <div class="repos" @click="fiatText">fiatText</div>
    <div class="repos" @click="test">test</div>
    <div class="extra">HOLAA</div>
  </div>
</template>

<script setup lang="ts">
import { WindowManager } from '~/stores/Queue';
import { createWindow } from '~/utils/window';

const store = WindowManager();

const { data: repos } = await useAsyncData('repos', () => {
  return queryCollection('repos').order('order', 'ASC').all();
});

const menuRef: globalThis.Ref<HTMLElement | null> = ref(null);
const titleRef: globalThis.Ref<HTMLElement | null> = ref(null);

const onUpdate = () => {
  if (!titleRef.value || !menuRef.value) return;
  const menuW = menuRef.value.offsetWidth;
  const titleW = titleRef.value.scrollWidth;
  const scaleX = menuW / titleW;

  titleRef.value.style.transform = `scale(${scaleX}, 0.5)`;
};
onMounted(() => {
  onUpdate();
  window.addEventListener('resize', onUpdate);
});

onUnmounted(() => {
  window.removeEventListener('resize', onUpdate);
});

function test() {
  // TODO elegir otros iuconos
  store.openWindow(createWindow('test', '/', 'uil:github'));
}
function fiatText() {
  // TODO elegir otros iuconos
  store.openWindow(createWindow('fiatText', '/fiatText', 'uil:github'));
}
</script>
<style scoped lang="css">
.title {
  font-family: var(--font-sans);
  font-size: 48px;
  width: fit-content;

  transform-origin: top left;
}

.menu {
  position: fixed;
  top: var(--fixed-top);
  left: var(--fixed-left);

  flex-direction: column;
  min-height: 20rem;
  min-width: 30rem;
  width: fit-content;
  height: auto;
}

.menu {
  display: flex;
  padding: 0 0;

  /*   
  justify-content: space-around;
  align-items: center; 
  */
}

@media (max-width: 768px) {
  .menu {
    top: var(--fixed-top);
    right: var(--fixed-right);
    left: var(--fixed-left);

    width: auto;
    /*
    justify-content: space-evenly;
    */
  }
}
</style>
