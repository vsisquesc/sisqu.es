<template>
  
  <div class="wrapper">
 
    <div class="body">
      <slot />
    </div>
 
  </div>
</template>

<script setup lang="ts">
</script>


<style lang="postcss" scoped>
.wrapper{
 
  background-image: url('~/assets/img/periodico_clasico.jpg'), url('~/assets/img/poco_envejecido.jpg'), url('~/assets/img/prensa_fria_limpia.jpg');
  background-blend-mode: multiply, multiply;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* background-color: #000000; */
}
.header{}
.body{}
.footer{}
</style>

<style lang="postcss" >
h1 {
  @apply text-3xl md:text-4xl  font-bold;
}
.text {
  @apply font-TT2020 mix-blend-multiply text-zinc-700;
}
</style>
