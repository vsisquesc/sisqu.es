<template>
    <div class="content">
        <Header />
        <div>
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
