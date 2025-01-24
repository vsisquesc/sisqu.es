<template>
    <div
        class="entry"
        :class="{ 'text-sm': small }"
        @mouseover="info = true"
        @mouseleave="info = false"
    >
        <nuxt-img class="image" :src="rating.content.cover_large" />

        <div class="info backdrop-grayscale-filter" v-if="info">
            <div class="justify-start items-start">
                <div class="text">
                    {{ rating.content.title }}
                </div>
            </div>
            <div v-if="showReview" class="justify-center items-center">
                <div class="text">
                    {{ rating.rating }}
                </div>
            </div>
            <div class="justify-end items-end">
                <div class="text">
                    {{ rating.content.artist.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Rating } from "~/entities"

// ---------- Imports ----------

// ---------- Props ----------
interface Props {
    rating: Rating
    small?: boolean
    showReview?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    small: false,
    showReview: false,
})

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

.info > div {
    @apply h-full w-full flex;
}

.text {
    @apply bg-white px-2 text-black;
}
</style>
