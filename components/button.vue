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
    box-shadow: 0px 0px 4px 4px var(--color-shadow);
    -webkit-box-shadow: 0px 0px 4px 4px var(--color-shadow);
    -moz-box-shadow: 0px 0px 4px 4px var(--color-shadow);
    filter: brightness(1.05);
}

.button:active {
    box-shadow: inset 0px 0px 4px 2px var(--color-shadow);
    -webkit-box-shadow: inset 0px 0px 4px 2px var(--color-shadow);
    -moz-box-shadow: inset 0px 0px 4px 2px var(--color-shadow);
    filter: brightness(1.1);
}

.dark-mode .button {
    box-shadow: inset 0px 0px 8px 2px var(--color-shadow);
    -webkit-box-shadow: inset 0px 0px 8px 2px var(--color-shadow);
    -moz-box-shadow: inset 0px 0px 8px 2px var(--color-shadow);
    filter: brightness(2);
}

.dark-mode .button:active {
    box-shadow: inset 0px 0px 4px 2px var(--color-shadow);
    -webkit-box-shadow: inset 0px 0px 4px 2px var(--color-shadow);
    -moz-box-shadow: inset 0px 0px 4px 2px var(--color-shadow);
    filter: brightness(1);
}
</style>
