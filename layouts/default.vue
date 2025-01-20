<template>
    <div class="content">
        <Main-Header />
        <div class="page-wrapper">
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
