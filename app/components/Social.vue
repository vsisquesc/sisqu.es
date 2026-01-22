<template>
  <div class="social">
    <a
      v-for="entry in social"
      :key="entry.order"
      :href="entry.href"
      :alt="entry.name"
      class="entry"
    >
      <Icon
        :name="entry.iconName"
        size="1.5rem"
        style="color: var(--color-text)"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
const { data: social } = await useAsyncData('social', () => {
  return queryCollection('social').order('order', 'ASC').all();
});
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
  gap: var(--flex-gap);
  padding: var(--vertical-padding) var(--horizontal-padding);
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius);
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
}
</style>
