<template>
    <nuxt-link class="link" :to="href">
        <slot />
    </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
    href: string
}
const props = defineProps<Props>()
</script>

<style lang="postcss" scoped></style>
