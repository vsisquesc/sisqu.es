<template>
  
  <div class="bg"/>
  <div class="wrapper">
 
      <slot />
 
  </div>
</template>

<script setup lang="ts">
</script>


<style lang="postcss" scoped>
.bg{ 
  @apply w-screen h-screen fixed;
  background-image: url('~/assets/img/periodico_clasico.jpg'), url('~/assets/img/poco_envejecido.jpg'), url('~/assets/img/prensa_fria_limpia.jpg');
  background-blend-mode: multiply, multiply;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
  /* background-attachment: fixed;  */
  /* translate: 0 10% */
}
.wrapper{
  @apply w-full h-full;
  
}
.header{}
.body{}
.footer{}
</style>

<style lang="postcss" >
html, body, #__nuxt
{
    height: 100%;
    width: 100%;
}

h1 {
  @apply text-3xl md:text-4xl  font-bold;
}
h1,
h2,
h3,
p ,
span {
  @apply font-TT2020 mix-blend-multiply text-black/65;
}
</style>
