<template>
  <div class="social container">
    <div
      v-for="entry in social"
      :key="entry.order"
      :href="entry.href"
      :alt="entry.name"
      class="entry"
      @pointerdown="openWindow(entry)"
      :class="{
        active: store.contains(entry.href),
        first: store.isFirst(entry.href),
      }"
    >
      <Icon
        :name="entry.iconName"
        size="var(--icon-size)"
        style="color: var(--color-text)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { WindowManager } from '~/stores/Queue';
import { createWindow } from '~/utils/window';

const store = WindowManager();

const { data: social } = await useAsyncData('social', () => {
  return queryCollection('social').order('order', 'ASC').all();
});

function openWindow(entry: Social) {
  store.openWindow(createWindow(entry.name, entry.href));
}
</script>
<style scoped lang="css">
.social {
  position: fixed;
  bottom: var(--fixed-bottom);
  right: var(--fixed-right);

  flex-direction: column;
  min-height: 3rem;
  min-width: 2rem;
  width: fit-content;
  height: auto;
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .social {
    flex-direction: row;

    bottom: var(--fixed-bottom);
    right: var(--fixed-right);
    left: var(--fixed-left);

    width: auto;

    justify-content: space-evenly;
  }
}

.entry {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.entry.active::after {
  position: absolute;
  content: '';
  top: -2px;
  right: -2px;
  height: 8px;
  width: 8px;
  background-color: var(--color-text);
  border: 2px solid var(--color-background);
  border-radius: var(--border-radius);
}
.entry.first::after {
  position: absolute;
  content: '';
  top: -2px;
  right: -2px;
  height: 8px;
  width: 8px;
  background-color: var(--color-background);
  border: 2px solid var(--color-text);
  border-radius: var(--border-radius);
}
</style>
