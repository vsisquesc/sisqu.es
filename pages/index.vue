<template>
    <div class="wrapper">
        <!-- <Artist /> -->
        <Wip />
        <Photos />
        <Wip />

        <!--
    Yo (scrol que gire el modelo de gondo)
    Blog (subo cosas como estaticos)
    Musica (recomendaciones)
    Playground (chorradas, juegoes, herramientas)
    Porrtfolio 
-->

        <!-- <Music /> -->
    </div>
</template>

<script setup lang="ts">
import Music from "~/components/music.vue"

definePageMeta({
    layout: "default",
})
</script>

<style lang="postcss" scoped>
.wrapper {
    @apply flex items-center justify-center w-full h-full flex-col;
}

.title {
    @apply flex items-center justify-center flex-col;
}
</style>
