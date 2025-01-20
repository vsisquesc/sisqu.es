<template>
    <div class="component-wrapper full">
        <Basic-Link href="/Photos">{{ $t("links.photos") }}</Basic-Link>
        <Basic-Link href="/Music">{{ $t("links.music") }}</Basic-Link>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
.full {
    @apply h-screen -mt-16;
}
</style>
