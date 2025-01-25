<template>
    <div class="button">
        <slot />
    </div>
</template>

<script setup></script>

<style lang="postcss" scoped>
.button {
    @apply p-3 rounded-full cursor-pointer flex items-center justify-center;
}

.button {
    background-color: var(--color-border);
}
</style>
