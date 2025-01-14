<template>
    <div class="entry" @mouseover="info = true" @mouseleave="info = false">
        <nuxt-img class="image" :src="rating.content.cover_large" />

        <div class="info backdrop-grayscale-filter" v-if="info">
            <div class="title">
                <div class="text">
                    {{ rating.content.title }}
                </div>
            </div>
            <div class="artist">
                <div class="text">
                    {{ rating.content.artist.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// ---------- Imports ----------
import type { MusicBoard, Rating } from "~/entities"
import { MusicBoardService } from "~/services"

// ---------- Props ----------
interface Props {
    rating: Rating
}
const props = defineProps<Props>()

// ---------- References ----------
const info: globalThis.Ref<boolean> = ref(false)

// ---------- Variables ----------

// ---------- Methods ----------
</script>

<style lang="postcss" scoped>
.entry {
    @apply flex flex-col relative w-full h-full;
}

.image {
    @apply w-full h-auto;
}

.info {
    @apply absolute w-full h-full flex flex-col  items-start justify-center;
}

.info .title,
.info .artist {
    @apply text-black h-full w-full flex;
}

.info .title {
    @apply justify-start items-start;
}

.info .artist {
    @apply justify-end items-end;
}

.text {
    @apply bg-white px-2;
}
</style>
