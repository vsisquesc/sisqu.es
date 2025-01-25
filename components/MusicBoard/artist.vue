<template>
    <div
        v-if="background"
        class="artist-container w-full"
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
        <nuxt-img
            class="background"
            :class="{
                'right-gradient': !left,
                'left-gradient': left,
            }"
            :src="background.background_large"
        />
    </div>
    <div v-else class="artist-container">
        <nuxt-img class="portrait" :src="artist.picture_large" />
        <div class="small-info">
            <div class="h-full w-full flex justify-end items-end">
                <div class="bg-white px-2 text-black">
                    {{ artist.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Artist, Background, Rating } from "~/entities"

// ---------- Imports ----------

// ---------- Props ----------
interface Props {
    artist: Artist
    background?: Background
    left?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    left: false,
})

// ---------- References ----------
// ---------- Variables ----------

// ---------- Methods ----------
</script>

<style lang="postcss" scoped>
.artist-container {
    height: 384px;
    @apply relative flex justify-end items-center;
}

.background {
    @apply h-full w-3/5 right-0;
    object-fit: cover;
}
.portrait {
    @apply h-full;
    object-fit: cover;
}

.small-info {
    @apply absolute w-full h-full flex flex-col  items-start justify-center;
}

.right-gradient {
    mask-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.8) 60%,
        rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-image: -webkit-gradient(
        linear,
        right top,
        left top,
        color-stop(0, rgba(0, 0, 0, 1)),
        color-stop(0.6, rgba(0, 0, 0, 0.8)),
        color-stop(1, rgba(0, 0, 0, 0))
    );
}
.left-gradient {
    mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.8) 60%,
        rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-image: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(0, rgba(0, 0, 0, 1)),
        color-stop(0.6, rgba(0, 0, 0, 0.8)),
        color-stop(1, rgba(0, 0, 0, 0))
    );
}
</style>
