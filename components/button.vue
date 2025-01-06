<template>
    <div class="button">
        <slot />
    </div>
</template>

<script setup></script>

<style lang="postcss">
.button {
    @apply p-3 rounded-full cursor-pointer flex items-center justify-center;
    background-color: var(--color-background);
}

.button {
    background-color: rgb(from var(--color-border) r g b / 0.2);
}

/* .button:active {
    background-color: rgb(from var(--color-border) r g b / 0.1);
} */
</style>
