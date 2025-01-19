<template>
    <div id="container" ref="ImagesContainer">
        <div class="image-scroller" ref="ImageScroller">
            <div v-for="(img, idx) of imageData">
                <nuxt-img
                    v-if="idx <= currentImageIndex"
                    :class="{
                        'main-img': idx == 0,
                        img: idx > 0,
                        'grayscale-filter ': idx <= currentImageIndex - 1,
                    }"
                    :style="getStyle(img, idx)"
                    :src="img.src"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// ---------- Imports ----------
// ---------- References ----------
const imageData: globalThis.Ref<ImageScroller[]> = ref([])

const ImagesContainer: globalThis.Ref<HTMLElement | undefined> = ref()
const ImageScroller: globalThis.Ref<HTMLElement | undefined> = ref()

const currentImageIndex: globalThis.Ref<number> = ref(0)

// ---------- Variables ----------
const images = [
    "https://espirituracer.com/archivos/2023/01/mitsubishi-fto-1.webp",
    "https://espirituracer.com/archivos/2023/01/mitsubishi-fto-1.webp",
    "https://espirituracer.com/archivos/2023/01/mitsubishi-fto-1.webp",
    "https://espirituracer.com/archivos/2023/01/mitsubishi-fto-1.webp",
]

// ---------- Mounted ----------
onMounted(() => {
    // const container = document.getElementById("container")
    if (import.meta.client) {
        window.addEventListener("scroll", handleScroll)
    }
    const height = 100 + (images.length - 1) * 40
    ImagesContainer.value!.style.height = `${height}vh`

    imageData.value = images.map(initImage)
})
// ---------- Methods ----------
function handleScroll() {
    try {
        const rect_container = ImagesContainer.value!.getBoundingClientRect()

        // Distancia entre el inicio del div y el inicio del viewport
        const d_top = -rect_container.top
        const img_h = ImageScroller.value!.getBoundingClientRect().height
        const h = rect_container.height

        // Porcentaje del div recorrido ( se tiene en cuenta la altura de la imagen)
        const percent = d_top / (h - img_h)

        // Limites para cada imagen
        const step = 1 / images.length

        // Se calcula q step mostrar
        currentImageIndex.value = clamp(
            Math.floor(percent / step),
            0,
            images.length
        )
    } catch (err) {
        console.log("Error while handling scroll", err)
    }
}

function initImage(e: string): ImageScroller {
    try {
        const containerWidth =
            ImagesContainer.value!.getBoundingClientRect().width

        const img_h = ImageScroller.value!.getBoundingClientRect().height
        const img_w = ImageScroller.value!.getBoundingClientRect().width

        // Generacion de width
        const min_w = img_w / 4
        const max_w = img_w / 2

        const width = between(min_w, max_w)

        // Generacion de left
        const min_left = 0
        const max_left = containerWidth - width

        const left = between(min_left, max_left)

        // Generacion de top

        const height = (width * img_h) / img_w

        const min_top = 0
        const max_top = img_h - height

        const top = between(min_top, max_top)

        return {
            src: e,
            width: width,
            top: top,
            left: left,
        } as ImageScroller
    } catch (err) {
        console.log("error while initializating images", err)
        return {
            src: e,
            width: 0,
            top: 0,
            left: 0,
        } as ImageScroller
    }
}

function getStyle(img: ImageScroller, idx: number) {
    if (idx > 0) {
        return `
        width: ${img.width}px;
        top: ${img.top}px;
        left: ${img.left}px;
        `
    }
}
</script>

<style lang="postcss" scoped>
#container {
    height: 100vh;
    width: 100vw;
    overflow-x: unset;
}
.image-scroller {
    height: 100vh;
    width: 100vw;
    position: sticky;
    top: 0;
    bottom: 0;
}

.main-img {
    width: 100%;
    height: auto;
    position: relative;
    @apply object-scale-down;
}

.img {
    height: auto;
    position: absolute;
}
</style>
