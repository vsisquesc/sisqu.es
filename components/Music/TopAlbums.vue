<template>
    <div class="component-wrapper">
        <div class="title">{{ $t("music.albums") }}</div>
        <div class="reviews">
            <MusicBoard-Album
                v-for="review in music_board_data?.results"
                :rating="review.rating"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
// ---------- Imports ----------
import { MusicBoardReviews, type MusicBoardRatings } from "~/entities"
import { MusicBoardRatingsService, MusicBoardReviewsService } from "~/services"

// ---------- References ----------
const music_board_data: globalThis.Ref<MusicBoardReviews | undefined> =
    ref(undefined)

// ---------- Services ----------
const service_musicBoard_reviews = new MusicBoardReviewsService()

// ---------- Data Fetching ----------
const res = useFetch(service_musicBoard_reviews.getUrl(), {
    query: service_musicBoard_reviews.getParams({
        order_by: "-rating__rating",
        min_rating: 4.5,
        pinned: true,
    }),
}).then((res) => {
    const data: MusicBoardReviewsDTO = res.data.value as MusicBoardReviewsDTO
    music_board_data.value = new MusicBoardReviews(data)

    return data
})

// const { data, status, error, refresh, clear } = useAsyncData(
//     "get_musicboard_data",

//     async function () {
//         const res: NetworkResponse<MusicBoardReviews> =
//             await service_musicBoard_reviews.Get({
//                 order_by: "-rating__rating",
//                 min_rating: 4.5,
//                 pinned: true,
//             })

//         if (!res.ok) {
//             throw Error(res.message)
//         }
//         music_board_data.value = res.data
//         return res.data
//     }
// )
// ---------- Methods ----------
</script>

<style lang="postcss" scoped>
.reviews {
    @apply grid grid-cols-1 sm:grid-cols-4 w-full h-auto  gap-2 sm:gap-4;
}
</style>
