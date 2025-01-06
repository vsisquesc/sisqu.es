<template>
    <div class="wrapper">
        <h1 class="title text">WIP</h1>
        <!--
    Yo (scrol que gire el modelo de gondo)
    Blog (subo cosas como estaticos)
    Musica (recomendaciones)
    Playground (chorradas, juegoes, herramientas)
    Porrtfolio 
-->
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
})
</script>

<style lang="postcss" scoped>
.wrapper {
    @apply flex items-center justify-center w-full h-screen flex-col;
}

.title {
    @apply flex items-center justify-center flex-col;
}
</style>
