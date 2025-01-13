<template>
    {{ music_board_data }}
</template>

<script setup lang="ts">
import type { MusicBoard } from "~/entities"
import { MusicBoardService } from "~/services"

// ---------- Imports ----------

// ---------- Plugins ----------
const { $pluginName } = useNuxtApp()

// ---------- Emits ----------
const emit = defineEmits([])

// ---------- References ----------
const music_board_data: globalThis.Ref<MusicBoard | undefined> = ref(undefined)
const next: globalThis.Ref<string> = ref("")

// ---------- Services ----------
const service_musicBoard = new MusicBoardService()

// ---------- Variables ----------

// ---------- Data Fetching ----------
const { data, status, error, refresh, clear } = useAsyncData(
    "get_musicboard_data",

    async function () {
        const res: NetworkResponse<MusicBoard> = await service_musicBoard.Get({
            limit: 1,
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

<style lang="postcss" scoped></style>
