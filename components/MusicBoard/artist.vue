<template>
    <div
        class="artist-container"
        :class="{
            'flex-row': !left,
            'flex-row-reverse': left,
        }"
    >
        <div
            class="absolute boxed-title"
            :class="{
                'right-1/2': !left,
                'left-1/2': left,
            }"
        >
            {{ artist.name }}
        </div>
        <nuxt-img class="photo" :src="background.background_large" />
    </div>
</template>

<script setup lang="ts">
import type { Artist, Background, Rating } from "~/entities"

// ---------- Imports ----------

// ---------- Props ----------
interface Props {
    artist: Artist
    background: Background
    left?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    left: false,
})

// ---------- References ----------
const info: globalThis.Ref<boolean> = ref(false)

// ---------- Variables ----------

// ---------- Methods ----------
</script>

<style lang="postcss" scoped>
.artist-container {
    width: 100vw;
    height: 384px;
    @apply relative flex justify-end items-center;
}

.photo {
    @apply h-full w-3/5 right-0;
    object-fit: cover;
}
</style>
