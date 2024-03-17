<template>
  <div class="content">
    <transition name="slide-T2B">
      <div v-show="option==='projects'" class="projects">
        <!-- https://image.shutterstock.com/shutterstock/photos/487752658/display_1500/stock-photo-vintage-looking-office-folder-with-numbered-tabs-isolated-on-white-487752658.jpg -->
        <div class="tab"><p>CSS</p></div>
        <div class="tab"><p>VISION</p></div>
        <div class="tab"><p>APPS</p></div>
        <div class="tab"><p>MISC</p></div>
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
</script>

<style lang="postcss" scoped>
.content{
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
  @apply w-[15%] px-12 py-2;
  background-image: url('~/assets/img/tab.jpg');
  background-size: contain;
  position: relative;
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
 
/* .tab:nth-child(2)::after  {
  box-shadow:0px -10px 5px -2px rgba(0, 0, 0, 0.4)
}
.tab:nth-child(3)::after  {
  box-shadow:0px -12px 5px -2px rgba(0, 0, 0, 0.4)
}
.tab:nth-child(4)::after  {
  box-shadow:0px -14px 5px -2px rgba(0, 0, 0, 0.4)
} */

 

</style>
