<template>
    <div class="header-wrapper">
        <nuxt-Link v-if="showTitle" to="/"
            ><h1 class="tilt">SISQU.ES</h1>
        </nuxt-Link>

        <Basic-Button v-else @mousedown="scrollUp">
            <Icon
                name="material-symbols:arrow-upward-rounded"
                :style="
                    colorMode.value != 'light' ? 'color: black' : 'color:white'
                "
            />
        </Basic-Button>
        <Basic-Button @mousedown="iterateMode">
            <Icon
                v-if="colorMode.value != 'light'"
                name="material-symbols:light-mode"
                style="color: black"
            />
            <Icon
                v-else
                name="material-symbols:dark-mode"
                style="color: white"
            />
        </Basic-Button>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const modes = ["light", "dark"]

const showTitle: globalThis.Ref<boolean> = ref(true)
onBeforeMount(() => {
    if (import.meta.client) {
        handleScroll()
        window.addEventListener("scroll", handleScroll)
    }
})

function handleScroll() {
    const scroll = window.scrollY || document.documentElement.scrollTop
    showTitle.value = scroll <= 100
}

function iterateMode() {
    var currentMode = colorMode.preference
    if (currentMode == "system") {
        currentMode = colorMode.value
    }

    const newIndex = (modes.indexOf(currentMode) + 1) % modes.length
    colorMode.preference = modes[newIndex]
}

function scrollUp() {
    if (import.meta.client) {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Animación suave
        })
    }
}
</script>

<style lang="postcss" scoped>
.header-wrapper {
    background-color: var(--color-background);
    @apply fixed flex w-full justify-between px-2 h-16 items-center z-10;
}
</style>
