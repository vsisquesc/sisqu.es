<template>
    <div class="component-wrapper">
        <div class="title">{{ $t("music.highest") }}</div>
        <div class="reviews">
            <MusicBoard-Album
                v-for="rating in music_board_data?.results"
                :rating="rating"
                :show-review="true"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
// ---------- Imports ----------
import { MusicBoardRatings } from "~/entities"
import { MusicBoardRatingsService, MusicBoardReviewsService } from "~/services"

// ---------- References ----------
const music_board_data: globalThis.Ref<MusicBoardRatings | undefined> =
    ref(undefined)

// ---------- Services ----------
const service_musicBoard_ratings = new MusicBoardRatingsService()

// ---------- Data Fetching ----------
const res = useFetch(service_musicBoard_ratings.getUrl(), {
    query: service_musicBoard_ratings.getParams({
        order_by: "-rating__rating",
        min_rating: 4.5,
    }),
}).then((res) => {
    const data: MusicBoardRatingsDTO = res.data.value as MusicBoardRatingsDTO
    music_board_data.value = new MusicBoardRatings(data)

    return data
})

// const { data, status, error, refresh, clear } = useAsyncData(
//     "get_musicboard_data",

//     async function () {
//         const res: NetworkResponse<MusicBoardRatings> =
//             await service_musicBoard_ratings.Get({
//                 order_by: "-rating__rating",
//                 min_rating: 4.5,
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
    @apply grid grid-cols-1 sm:grid-cols-6 w-full h-auto  gap-2 sm:gap-4;
}
</style>
