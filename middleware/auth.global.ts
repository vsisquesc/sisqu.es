export default defineNuxtRouteMiddleware((to) => {
    const route = useRoute()
    const fullPath = route.fullPath
    const { isMobile } = useNuxtApp().$device
    console.log(fullPath)
    if (isMobile && !fullPath.includes("tururu")) {
        return navigateTo("https://www.instagram.com/sisqu.es/", {
            replace: true,
            redirectCode: 301,
            external: true,
        })
    }
})
