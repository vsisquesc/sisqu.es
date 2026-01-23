<template>
  <div
    class="window container"
    :style="windowStyle"
    ref="windowRef"
    :class="{
      fullscreen: windowData.fullscreen,
      minimized: windowData.minimized,
    }"
    @mousedown="startDrag"
  >
    <div
      class="topbar"
      :class="{
        fullscreen: windowData.fullscreen,
      }"
      ref="topbarRef"
      @dblclick="windowAction('fullscreen')"
    >
      <div class="title">
        {{ windowData.title }}
      </div>
      <div class="icons">
        <Icon
          v-for="iconName in topbarIcons"
          :name="`mdi:${iconName}`"
          size="var(--icon-size)"
          style="color: var(--color-text)"
          :alt="$t(`window.${iconName}`)"
          @mousedown="windowAction(iconName)"
        />
      </div>
    </div>
    <div
      class="content"
      :class="{
        fullscreen: windowData.fullscreen,
      }"
    >
      {{ windowData }}
      <!-- <iframe :src="windowData.href" /> -->
      <Icon
        v-if="!windowData.fullscreen"
        class="resize"
        name="pajamas:resize"
        size="var(--icon-size)"
        style="color: var(--color-text)"
        :alt="$t(`window.resize`)"
        @mousedown.stop="startResize"
      />
    </div>
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

function startDrag(e: MouseEvent) {
  goUp();
  if (props.windowData.fullscreen || !topbarRef.value) return; // no arrastrar si está fullscreen
  isDragging.value = true;

  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  // Distancia entre punto de agarre y borde superior izquierdo
  dragOffset.value.x = e.clientX - rect.left;
  dragOffset.value.y = e.clientY - rect.top;

  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
}

function onDrag(e: MouseEvent) {
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

function stopDrag() {
  isDragging.value = false;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
}

// ---=== WINDOW RESIZE ===---
const isResizing: globalThis.Ref<boolean> = ref(false);
const resizeOffset: globalThis.Ref<{ x: number; y: number }> = ref({
  x: 0,
  y: 0,
});

function startResize(e: MouseEvent) {
  goUp();
  if (props.windowData.fullscreen || !windowRef.value) return; // no arrastrar si está fullscreen
  isResizing.value = true;

  // Distancia entre punto de agarre y borde inferior derecho
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  resizeOffset.value.x = rect.right - e.clientX;
  resizeOffset.value.y = rect.bottom - e.clientY;

  document.addEventListener('mousemove', onResize);
  document.addEventListener('mouseup', stopResize);
}

function onResize(e: MouseEvent) {
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

function stopResize() {
  isResizing.value = false;
  document.removeEventListener('mousemove', onResize);
  document.removeEventListener('mouseup', stopResize);
}
</script>

<style scoped lang="css">
.window {
  display: block;

  font-family: var(--font-mono);
}

.topbar,
.content {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--vertical-padding) var(--horizontal-padding);
}

.topbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: grab;
}
.topbar .icons {
  display: flex;
  align-items: center;
}
.topbar .icons > * {
  cursor: pointer;
}
.content .resize {
  cursor: move;
  position: absolute;
  bottom: var(--fixed-bottom);
  right: var(--fixed-right);
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
.topbar.fullscreen {
  background-color: var(--color-border);
}
</style>
<style scoped lang="css">
.window.minimized {
  display: none;
}
</style>
