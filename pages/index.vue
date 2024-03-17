<template>
  <div class="content-phone">
      WIP
  </div>
  <div class="content-desktop">
    <transition name="slide-T2B">
      <div v-show="option==='projects'" class="projects">
        <!-- https://image.shutterstock.com/shutterstock/photos/487752658/display_1500/stock-photo-vintage-looking-office-folder-with-numbered-tabs-isolated-on-white-487752658.jpg -->
        <div v-for="(el, idx) in projects" :key="idx" 
        class="tab"
        :style="{ 'z-index': 100-idx}"
        ><p>{{el}}</p></div>
      </div>
    </transition>

    <div class="menu">
      <h1 class="title">Víctor Sisqués Cortés</h1>
      <div class="options">
        <p @click="option = 'projects'">Projects</p>
        <p @click="option = 'about_me'">About me</p>
        <p @click="option = 'blog'">Blog</p>
        <p @click="option = 'contact'">Contact</p>
      </div>
    </div>
 

    <div class="contact">
      <p>LINKED IN</p>
      <p>INSTAGRAM</p>
      <p>EMAIL</p>
      <p>TELEPHONE</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
const option: globalThis.Ref<string | undefined> = ref(undefined);

const projects: string[] = [
        'CSS',
        'VISION',
        'APPS',
        'MISC',
]
</script>

<style lang="postcss" scoped>

.content-phone{
  @apply block lg:hidden;
}
.content-desktop{
  @apply hidden lg:block ;
}

.content-desktop{
  @apply h-full w-full overflow-hidden;
}

.menu{
  @apply w-full h-full flex flex-col gap-4 justify-center items-center;
}

.options{
  @apply flex flex-col justify-center items-center;
}
.options > *{
  @apply hover:italic text-2xl font-bold;
}

.projects{
  @apply flex flex-row  text-2xl font-bold;
  background-color:#000000;
  mix-blend-mode: multiply;
}

.tab {
  @apply w-[15%] py-2 flex justify-center;
  background-image: url('~/assets/masks/tab.png');
  background-size: 100% 100%;
  box-shadow:0px -10px 5px -2px rgba(0, 0, 0, 0.4);
  position: relative;
}

.tab:not(:first-child){
  margin-left: -40px;
}
.tab:not(:first-child)::after {
  bottom: -99%;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  box-shadow:0px -10px 5px -2px rgba(0, 0, 0, 0.4)
  
  /* Ir aumentando el -10px por cada elemento de tab */
}
 
</style>
