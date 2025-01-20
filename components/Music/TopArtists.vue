<template>
    <div class="component-wrapper">
        <div class="title">{{ $t("music.artists") }}</div>
        <div class="reviews">
            <div v-for="(rating, idx) in music_board_data?.results">
                <MusicBoard-Artist
                    v-if="rating.background.background_original != undefined"
                    :artist="rating.content.artist"
                    :background="rating.background"
                    :left="idx % 2 == 0"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// ---------- Imports ----------
import type { MusicBoardRatings } from "~/entities"
import { MusicBoardRatingsService, MusicBoardReviewsService } from "~/services"

// ---------- References ----------
const music_board_data: globalThis.Ref<MusicBoardRatings | undefined> =
    ref(undefined)
const next: globalThis.Ref<string> = ref("")

// ---------- Services ----------
const service_musicBoard_ratings = new MusicBoardRatingsService()

// ---------- Data Fetching ----------
const { data, status, error, refresh, clear } = useAsyncData(
    "get_musicboard_artists",

    async function () {
        const res: NetworkResponse<MusicBoardRatings> =
            await service_musicBoard_ratings.GetArtists({
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
    @apply flex flex-col w-full h-auto;
}
</style>
