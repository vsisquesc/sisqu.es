<template>
  <div
    class="window container"
    :style="windowStyle"
    ref="windowRef"
    :class="{
      fullscreen: windowData.fullscreen,
      minimized: windowData.minimized,
    }"
  >
    <div
      class="topbar"
      :class="{
        fullscreen: windowData.fullscreen,
      }"
      ref="topbarRef"
      @pointerdown="startDrag"
      @dblclick="windowAction('fullscreen')"
    >
      <div class="title">
        <Icon
          :name="windowData.icon"
          size="var(--icon-size)"
          style="color: var(--color-text)"
          :alt="windowData.title"
        />
        {{ windowData.title }}
      </div>
      <div class="icons">
        <Icon
          v-for="iconName in topbarIcons"
          :key="iconName"
          :name="`mdi:${iconName}`"
          size="var(--icon-size)"
          style="color: var(--color-text)"
          :alt="$t(`window.${iconName}`)"
          @pointerup.stop="windowAction(iconName)"
        />
      </div>
    </div>
    <div
      class="content"
      :class="{
        fullscreen: windowData.fullscreen,
      }"
    >
      <iframe class="iframe" :src="windowData.href" />
    </div>
    <Icon
      v-if="!windowData.fullscreen"
      class="resize"
      name="pajamas:resize"
      size="var(--icon-size)"
      style="color: var(--color-text)"
      :alt="$t(`window.resize`)"
      @pointerdown.stop="startResize"
    />
  </div>
</template>
<script setup lang="ts">
import { WindowManager } from '~/stores/Queue';
import type { CSSProperties } from 'vue';

const store = WindowManager();

interface Props {
  windowData: IFrameWindow;
}
const props = defineProps<Props>();

const windowRef: globalThis.Ref<HTMLElement | null> = ref(null);
const topbarRef: globalThis.Ref<HTMLElement | null> = ref(null);

// ---=== WINDOW STYLE ===---
const windowStyle = computed<CSSProperties>(() => {
  return {
    position: 'absolute', // ✅ string literal aceptable
    top: `${props.windowData.posY}%`,
    left: `${props.windowData.posX}%`,
    width: `${props.windowData.width}%`,
    height: `${props.windowData.height}%`,
    // 'zIndex': props.windowData.zIndex,
    zIndex: store.getZIndex(props.windowData),
  };
});
// ---=== UPDATE Z INDEX ===---
function goUp() {
  store.moveUp(props.windowData.href);
}

// ---=== TOP BAR ACTIONS ===---
const topbarIcons: Array<WindowAction> = [
  'globe',
  'minimize',
  'fullscreen',
  'close',
];

function windowAction(action: WindowAction) {
  stopDrag();

  switch (action) {
    case 'globe':
      window.open(props.windowData.href, '_blank');
      break;
    case 'minimize':
      props.windowData.minimized = true;
      break;
    case 'fullscreen':
      props.windowData.fullscreen = !props.windowData.fullscreen;
      break;
    case 'close':
      store.pop();
      break;

    default:
      break;
  }
}
// ---=== WINDOW DRAGGING ===--- (hecho con chat gpt)
const isDragging: globalThis.Ref<boolean> = ref(false);
const dragOffset: globalThis.Ref<{ x: number; y: number }> = ref({
  x: 0,
  y: 0,
});

function startDrag(e: PointerEvent) {
  goUp();
  if (props.windowData.fullscreen || !topbarRef.value) return; // no arrastrar si está fullscreen

  const target = e.target as HTMLElement;
  if (target.closest('.icons')) return;

  e.preventDefault();

  topbarRef.value.setPointerCapture(e.pointerId);
  isDragging.value = true;

  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  // Distancia entre punto de agarre y borde superior izquierdo
  dragOffset.value.x = e.clientX - rect.left;
  dragOffset.value.y = e.clientY - rect.top;

  document.addEventListener('pointermove', onDrag);
  document.addEventListener('pointerup', stopDrag);
}

function onDrag(e: PointerEvent) {
  if (!isDragging.value) return;

  // 1º Se calcula la nueva posición en función de la posición del raton y la
  // esquina superior izquierda de la ventana
  const posX = ((e.clientX - dragOffset.value.x) / window.innerWidth) * 100;
  const posY = ((e.clientY - dragOffset.value.y) / window.innerHeight) * 100;

  const topBarH = topbarRef.value!.offsetHeight;

  // Permitir mover únicamente en la pantalla
  props.windowData.posX = Math.min(
    Math.max(posX, -(dragOffset.value.x / window.innerWidth) * 100),
    100 - (dragOffset.value.x / window.innerWidth) * 100,
  );

  props.windowData.posY = Math.min(
    Math.max(posY, 0),
    100 - (topBarH / window.innerHeight) * 100,
  );
}

function stopDrag(e?: PointerEvent) {
  isDragging.value = false;
  document.removeEventListener('pointermove', onDrag);
  document.removeEventListener('pointerup', stopDrag);
  if (e && topbarRef.value) {
    try {
      topbarRef.value.releasePointerCapture(e.pointerId);
    } catch {}
  }
}

// ---=== WINDOW RESIZE ===---
const isResizing: globalThis.Ref<boolean> = ref(false);
const resizeOffset: globalThis.Ref<{ x: number; y: number }> = ref({
  x: 0,
  y: 0,
});

function startResize(e: PointerEvent) {
  goUp();
  if (props.windowData.fullscreen || !windowRef.value) return; // no arrastrar si está fullscreen
  e.preventDefault();

  windowRef.value.setPointerCapture(e.pointerId);

  isResizing.value = true;

  // Distancia entre punto de agarre y borde inferior derecho
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  resizeOffset.value.x = rect.right - e.clientX;
  resizeOffset.value.y = rect.bottom - e.clientY;

  document.addEventListener('pointermove', onResize);
  document.addEventListener('pointerup', stopResize);
}

function onResize(e: PointerEvent) {
  if (!isResizing.value) return;

  const rect = (windowRef.value as HTMLElement).getBoundingClientRect();

  // Se calculan los nuevos tamaños en función de la distancia entre la esquina
  // superior izquierda y la nueva posicón del raton
  const newWidthPx = e.clientX + resizeOffset.value.x - rect.left;
  const newHeightPx = e.clientY + resizeOffset.value.y - rect.top;

  // Se convierte a porcentajes
  props.windowData.width = (newWidthPx / window.innerWidth) * 100;
  props.windowData.height = (newHeightPx / window.innerHeight) * 100;

  if (props.windowData.width < 20) props.windowData.width = 20;
  if (props.windowData.height < 40) props.windowData.height = 40;
}

function stopResize(e?: PointerEvent) {
  isResizing.value = false;
  document.removeEventListener('pointermove', onResize);
  document.removeEventListener('pointerup', stopResize);
  if (e && topbarRef.value) {
    try {
      topbarRef.value.releasePointerCapture(e.pointerId);
    } catch {}
  }
}
</script>

<style scoped lang="css">
.window {
  display: flex;
  flex-direction: column;

  font-family: var(--font-mono);
}

.topbar,
.content {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--vertical-padding) var(--horizontal-padding);
}

.content {
  flex: 1;
  overflow: auto;
  min-height: 0;
}

.topbar {
  touch-action: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: grab;
}
.topbar .title {
  display: flex;
  align-items: center;
}
.topbar .icons {
  display: flex;
  align-items: center;
}
.topbar .icons > * {
  cursor: pointer;
}

.iframe {
  width: 100%;
  height: 100%;
}

.content .resize {
  touch-action: none;
  cursor: move;
  position: absolute;
  bottom: 2px;
  right: 2px;
}
</style>

<style scoped lang="css">
.window.fullscreen {
  top: 0px !important;
  left: 0px !important;
  width: 100% !important;
  height: 100% !important;

  gap: 0px;
  padding: 0px;
  border-radius: 0px;
}
.topbar.fullscreen,
.content.fullscreen {
  border: none;
  border-radius: 0px;
  padding: 0px;
}
.content.fullscreen {
  width: 100%;
  height: 100% !important;
}
.topbar.fullscreen {
  background-color: var(--color-border);
}
</style>
<style scoped lang="css">
.window.minimized {
  display: none;
}
</style>
