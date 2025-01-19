<template>
    <div class="wip-container">
        <span class="big"> {{ text }} </span>
    </div>
</template>

<script setup lang="ts">
const text: globalThis.computedRef<string> = computed(() => {
    var output = "WIP".repeat(1000)
    return output
})
</script>

<style lang="postcss" scoped>
.wip-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    display: flex;
}

.wip-container span {
    overflow-wrap: break-word;

    width: 100vw;
    height: 100vh;
    transform: scale(104%); /* Mueve el texto para cortarlo desde ambos lados */
}
</style>
