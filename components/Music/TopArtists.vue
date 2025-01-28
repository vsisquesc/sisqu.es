<template>
    <div class="component-wrapper">
        <div class="title">{{ $t("music.artists") }}</div>
        <div class="reviews">
            <MusicBoard-Artist
                v-for="(rating, idx) in ArtistWithBG"
                :artist="rating.content"
                :background="rating.background"
                :left="idx % 2 == 0"
            />

            <div class="grid grid-cols-4">
                <MusicBoard-Artist
                    v-for="(rating, idx) in ArtistWithoutBG"
                    :artist="rating.content"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// ---------- Imports ----------
import { MusicBoardArtists, type RatingArtist } from "~/entities"
import { MusicBoardArtistsService } from "~/services"

// ---------- References ----------
const music_board_data: globalThis.Ref<MusicBoardArtists | undefined> =
    ref(undefined)

// ---------- Services ----------
const service_musicBoard_artists = new MusicBoardArtistsService()

// ---------- Data Fetching ----------
const res = useFetch(service_musicBoard_artists.getUrl(), {
    query: service_musicBoard_artists.getParams({
        limit: 48,
        forceBackground: false,
        order_by: "-rating",
    }),
}).then((res) => {
    const data: MusicBoardArtistsDTO = res.data.value as MusicBoardArtistsDTO
    music_board_data.value = new MusicBoardArtists(data)

    return data
})

// const { data, status, error, refresh, clear } = useAsyncData(
//     "get_musicboard_artists",

//     async function () {
//         const res: NetworkResponse<MusicBoardArtists> =
//             await service_musicBoard_artists.Get({
//                 limit: 48,
//                 forceBackground: false,
//                 order_by: "-rating",
//             })

//         if (!res.ok) {
//             throw Error(res.message)
//         }
//         music_board_data.value = res.data
//         return res.data
//     }
// )
// ---------- Computed ----------
const ArtistWithBG: globalThis.ComputedRef<RatingArtist[]> = computed(() => {
    const output = music_board_data.value?.results
    return (
        output?.filter((e) => e.background.background_original != undefined) ??
        []
    )
})
const ArtistWithoutBG: globalThis.ComputedRef<RatingArtist[]> = computed(() => {
    const output = music_board_data.value?.results
    return (
        output?.filter((e) => e.background.background_original == undefined) ??
        []
    )
})
</script>

<style lang="postcss" scoped>
.reviews {
    @apply flex flex-col w-full h-auto;
}
</style>
