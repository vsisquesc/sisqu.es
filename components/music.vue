<template>
    <div class="reviews">
        <MusicBoard-Entry
            v-for="rating in music_board_data?.results"
            :rating="rating"
        />
    </div>
</template>

<script setup lang="ts">
import type { MusicBoardRatings } from "~/entities"
import { MusicBoardRatingsService, MusicBoardReviewsService } from "~/services"

// ---------- References ----------
const music_board_data: globalThis.Ref<MusicBoardRatings | undefined> =
    ref(undefined)
const next: globalThis.Ref<string> = ref("")

// ---------- Services ----------
const service_musicBoard_reviews = new MusicBoardReviewsService()
const service_musicBoard_ratings = new MusicBoardRatingsService()

// ---------- Variables ----------

// ---------- Data Fetching ----------
const { data, status, error, refresh, clear } = useAsyncData(
    "get_musicboard_data",

    async function () {
        const res: NetworkResponse<MusicBoardRatings> =
            await service_musicBoard_ratings.Get({
                order_by: "-rating__rating",
                min_rating: 4.5,
            })

        if (!res.ok) {
            throw Error(res.message)
        }
        music_board_data.value = res.data
        next.value = music_board_data.value!.next!
        return res.data
    }
)
// ---------- Methods ----------
</script>

<style lang="postcss" scoped>
.reviews {
    @apply grid grid-cols-1 sm:grid-cols-4 w-full h-auto  gap-2 sm:gap-4;
}
</style>
