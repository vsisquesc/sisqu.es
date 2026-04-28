export default defineNuxtRouteMiddleware((to) => {
  return navigateTo('https://www.instagram.com/sisqu.es/', {
    replace: true,
    redirectCode: 301,
    external: true,
  });
});
