<template>
    <div class="artist-container">
        <div class="name big tilt">JPEGMAFIA</div>
        <div class="photo"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.artist-container {
    width: 100vw;
    height: 384px;
    @apply relative flex justify-end items-center;
}

.name {
    @apply absolute bg-white  right-1/2;
}

.photo {
    @apply bg-black  h-full w-3/5 right-0;
}
</style>
