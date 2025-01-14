<template>
    <div class="button">
        <slot />
    </div>
</template>

<script setup></script>

<style lang="postcss">
.button {
    @apply p-3 rounded-full cursor-pointer flex items-center justify-center;
}

.button {
    background-color: rgb(from var(--color-border) r g b / 1);
}
</style>
