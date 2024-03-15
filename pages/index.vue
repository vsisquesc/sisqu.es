<template>
    <div class="content">
      <h1 class="title text">Víctor Sisqués Cortés</h1>
      <div class="links text">
        <nuxt-link to="/wip">Projects</nuxt-link>
        <nuxt-link to="/wip">About me</nuxt-link>
        <nuxt-link to="/wip">Tarari</nuxt-link>
      </div>
      
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>C

<style lang="postcss" scoped>

.content{
  @apply flex items-center justify-center w-full h-screen flex-col ;
}
 
.title{
  @apply my-4;
}

.title,
.links{
  @apply flex w-full items-start md:items-center justify-center flex-col ;
}
a{
  @apply hover:italic text-xl md:text-2xl font-bold;
}
</style>