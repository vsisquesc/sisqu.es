<template>
  <div class="inputs">
    <div class="input">
      Box Width
      <input v-model="boxWidth" type="range" min="10" max="440" />
    </div>
    <div class="input">
      Box Color
      <input v-model="boxColor" type="color" />
    </div>
    <div class="input">
      Text Color
      <input v-model="textColor" type="color" />
    </div>
    <div class="input">
      Text
      <input v-model="text" type="text" />
    </div>
  </div>
  <div class="output" :style="outputStyle">
    <span
      class="char"
      v-for="letter in text.toUpperCase()"
      :key="letter + Math.random()"
      :style="boxStyle"
    >
      {{ letter }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const text: globalThis.Ref<string> = ref('fiat');

const boxWidth: globalThis.Ref<number> = ref(110);
const boxColor = ref('#01509f');
const textColor = ref('#ffffff');

const outputStyle: globalThis.ComputedRef<CSSProperties> = computed(() => {
  return {
    gap: `${boxWidth.value * 0.063}px`,
  };
});

const boxStyle: globalThis.ComputedRef<CSSProperties> = computed(() => {
  return {
    width: `${boxWidth.value}px`,
    height: `${boxWidth.value * 0.95}px`,
    fontSize: `${boxWidth.value * 0.9}px`,
    backgroundColor: boxColor.value,
    color: textColor.value,
  };
});
</script>

<style lang="css">
.inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.input {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.output {
  display: flex;
  justify-content: center;
  align-items: center;
}

.char {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: red;

  transform: skewX(-17.176deg);

  color: white;
  font-family: var(--font-fiat);
  font-weight: 900;
}
</style>
