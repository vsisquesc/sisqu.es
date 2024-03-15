<template>
    <div class="content">
      <h1 class="title text">Víctor Sisqués Cortés</h1>
      <div class="links text">
        <a href="">Projects</a>
        <a href="">About me</a>
        <a href="">Tarari</a>
      </div>
      
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>

<style lang="postcss" scoped>

.content{
  @apply flex items-center justify-center w-full h-screen flex-col ;
}
 

.title,
.links{
  @apply flex items-center justify-center flex-col ;
}
a{
  @apply hover:italic text-2xl font-bold;
}
</style>