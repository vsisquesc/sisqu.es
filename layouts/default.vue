<template>
    <div class="content">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
html {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    filter: grayscale(100%);
}
</style>

<style lang="postcss" scoped>
.content {
    @apply font-DMsans;
}
</style>
