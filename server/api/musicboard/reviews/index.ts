import puppeteer from "puppeteer"
import { MusicBoard } from "~/entities"

const config = useRuntimeConfig()

const MusicBoard_URL = config.MB_BACK + "reviews/"
export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const apiEndpoint: string = MusicBoard_URL
        const params: MB_params = JSON.parse(
            query.parameters as string
        ) as MB_params

        const minRating = params.min_rating

        params.content_type = "album"

        const data: MusicBoardReviewsDTO | undefined =
            await $fetch<MusicBoardReviewsDTO>(apiEndpoint, {
                method: "get",
                params: params,
            }).catch((err) => {
                throw Error(err)
            })

        if (data == undefined) {
            throw Error("Data is empty")
        }
        if (minRating != undefined) {
            data.results = data.results.filter(
                (e) => e.rating.rating >= minRating * 2
            )
        }
        return data
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        })
    }
})
