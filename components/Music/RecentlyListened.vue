<template>
    <div class="component-wrapper">
        <div class="title">{{ $t("music.recent") }}</div>
        <div class="reviews">
            <MusicBoard-Album
                v-for="rating in music_board_data?.results"
                :rating="rating"
                :small="true"
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
        limit: 24,
    }),
}).then((res) => {
    const data: MusicBoardRatingsDTO = res.data.value as MusicBoardRatingsDTO
    music_board_data.value = new MusicBoardRatings(data)

    return data
})

// const { data, status, error, refresh, clear } = useAsyncData(
//     "get_musicboard_all",

//     async function () {
//         const res: NetworkResponse<MusicBoardRatings> =
//             await service_musicBoard_ratings.Get({
//                 limit: 24,
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
    @apply grid grid-cols-1 sm:grid-cols-8 w-full h-auto  gap-1 sm:gap-2;
}
</style>
