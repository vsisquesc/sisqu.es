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
import type { MusicBoardRatings, MusicBoardReviews } from "~/entities"
import { MusicBoardRatingsService, MusicBoardReviewsService } from "~/services"

// ---------- References ----------
const music_board_data: globalThis.Ref<MusicBoardReviews | undefined> =
    ref(undefined)
const next: globalThis.Ref<string> = ref("")

// ---------- Services ----------
const service_musicBoard_reviews = new MusicBoardReviewsService()
const service_musicBoard_ratings = new MusicBoardRatingsService()

// ---------- Data Fetching ----------
const { data, status, error, refresh, clear } = useAsyncData(
    "get_musicboard_data",

    async function () {
        const res: NetworkResponse<MusicBoardReviews> =
            await service_musicBoard_reviews.Get({
                order_by: "-rating__rating",
                min_rating: 4.5,
                pinned: true,
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
