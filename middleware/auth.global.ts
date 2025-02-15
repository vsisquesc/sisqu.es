export default defineNuxtRouteMiddleware((to) => {
    const { isMobile } = useNuxtApp().$device
    if (isMobile) {
        return navigateTo("https://www.instagram.com/sisqu.es/", {
            replace: true,
            redirectCode: 301,
            external: true,
        })
    }
})
