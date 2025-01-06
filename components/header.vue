<template>
    <div class="header-wrapper">
        <h1 class="tilt">VÍCTOR SISQUÉS CORTÉS</h1>
        <Button @mousedown="iterateMode">
            <Icon
                v-if="colorMode.value == 'light'"
                name="material-symbols:dark-mode"
                style="color: black"
            />
            <Icon
                v-else
                name="material-symbols:light-mode"
                style="color: white"
            />
        </Button>
    </div>
</template>

<script setup>
const colorMode = useColorMode()

const modes = ["light", "dark"]

function iterateMode() {
    var currentMode = colorMode.preference
    if (currentMode == "system") {
        currentMode = colorMode.value
    }

    const newIndex = (modes.indexOf(currentMode) + 1) % modes.length
    colorMode.preference = modes[newIndex]
}
</script>

<style lang="postcss">
.header-wrapper {
    @apply fixed flex w-full justify-between px-2 h-16 items-center;
}
</style>
