<template>
  <div class="sidebar paper">
    <nuxtLink to="/">
      <h1 class="title">Víctor Sisqués Cortés</h1>
    </nuxtLink>
    <div class="options">
      <nuxtLink to="/projects">Projects</nuxtLink>
      <nuxtLink to="/about_me">About me</nuxtLink>
      <nuxtLink to="/blog">Blog</nuxtLink>
    </div>

    <div class="contact">
      <p>LINKED IN</p>
      <p>INSTAGRAM</p>
      <p>EMAIL</p>
      <p>TELEPHONE</p>
    </div>
  <div class="rip"> </div>
  </div>
</template>
<style lang="postcss" scoped>
.sidebar {
  @apply flex flex-col h-full w-48 fixed gap-8 pl-2 py-2 ;
}
.paper {
  background: url('~/assets/img/periodico_clasico.jpg'),
              url('~/assets/img/poco_envejecido.jpg'),
              url('~/assets/img/prensa_fria_limpia.jpg');
  background-blend-mode: multiply, multiply;  
  @apply mix-blend-multiply ;
}

.rip {
  content:"";
  background: url(~/assets/img/rip.svg) bottom;
  background-size: 100%;    
  filter: drop-shadow(-20px 0px 8px rgba(0,0,0,0.4));
  
  @apply  fixed top-0 left-48 -mx-14 w-72 h-full ; 
}
 

.title {
  @apply w-full  font-TT2020 font-bold text-3xl ;
}
.options {
  @apply flex flex-col  gap-2 w-full text-xl   font-bold  font-TT2020;
}
.contact {
  @apply mt-auto  font-TT2020 font-bold;
}
.router-link-active {
  @apply italic;
}
</style>
