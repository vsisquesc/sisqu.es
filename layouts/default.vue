<template>
    <div class="content">
        <Header />
        <div class="z-0 h-full w-full">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
.content {
    @apply font-DMsans;
}
</style>
