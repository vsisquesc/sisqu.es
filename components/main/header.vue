<template>
  <div class="header-wrapper">
    <div class="header">
      <div v-if="showTitle" @click="toggleMenu" class="cursor-pointer">
        <h1 class="tilt">SISQU.ES</h1>
      </div>

      <BasicScrolUp v-else />
      <BasicColorMode />
    </div>
    <MainMenu v-if="showMenu" @onLinkClick="toggleMenu" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  showMenu?: boolean;
}
const props = withDefaults(defineProps<Props>(), { showMenu: false });

const colorMode = useColorMode();

const modes = ["light", "dark"];

const showTitle: globalThis.Ref<boolean> = ref(true);
const showMenu: globalThis.Ref<boolean> = ref(props.showMenu);
onBeforeMount(() => {
  if (import.meta.client) {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }
});

function toggleMenu() {
  showMenu.value = !showMenu.value;
}

function handleScroll() {
  const scroll = window.scrollY || document.documentElement.scrollTop;
  showTitle.value = scroll <= 100;
}

function iterateMode() {
  var currentMode = colorMode.preference;
  if (currentMode == "system") {
    currentMode = colorMode.value;
  }

  const newIndex = (modes.indexOf(currentMode) + 1) % modes.length;
  colorMode.preference = modes[newIndex];
}

function scrollUp() {
  if (import.meta.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animación suave
    });
  }
}
</script>

<style lang="postcss" scoped>
.header-wrapper {
  background-color: var(--color-background);
  @apply fixed w-full z-10;
}
.header {
  @apply flex justify-between px-2 h-16 items-center;
}
</style>
