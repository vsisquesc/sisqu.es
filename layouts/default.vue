<template>
  
  <div class="wrapper bg">
      <Sidebar/>
      <slot />
  </div>
</template>

<script setup lang="ts">
</script>


<style lang="postcss" scoped>
.bg{  
  background-image:   url('~/assets/img/prensa_fria_limpia.jpg');
  background-blend-mode: multiply;
  -webkit-background-size: cover; 
}
.wrapper{
  @apply w-full h-full;
  
} 
</style>

<style lang="postcss" >
html, body, #__nuxt
{
    height: 100%;
    width: 100%;
}

 
</style>
