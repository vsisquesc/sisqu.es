<template>
  <div class="minimize container">
    <Icon
      @pointerdown="toggleWindows"
      class="entry"
      name="mdi:eye"
      size="var(--icon-size)"
      style="color: var(--color-text)"
      :alt="$t(`window.minimizeAll`)"
    />
  </div>
</template>

<script setup lang="ts">
import { WindowManager } from '~/stores/Queue';
import { createWindow } from '~/utils/window';

const store = WindowManager();

const windowsHidden: globalThis.Ref<boolean> = ref(false);

function toggleWindows() {
  if (windowsHidden.value) {
    store.showWindows();
  } else {
    store.hideWindows();
  }
  windowsHidden.value = !windowsHidden.value;
}
</script>
<style scoped lang="css">
.minimize {
  position: fixed;
  top: var(--fixed-bottom);
  right: var(--fixed-right);

  flex-direction: column;
  min-height: 2rem;
  min-width: 2rem;
  width: fit-content;

  padding: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.entry {
  cursor: pointer;
}
</style>
