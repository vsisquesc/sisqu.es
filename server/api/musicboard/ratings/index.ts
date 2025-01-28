import puppeteer from "puppeteer"
import { MusicBoard } from "~/entities"

const config = useRuntimeConfig()

const MusicBoard_URL = config.MB_BACK + "ratings/"
export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const apiEndpoint: string = MusicBoard_URL
        const params: MB_params = JSON.parse(
            query.parameters as string
        ) as MB_params

        if (params.order_by == "-rating__rating") {
            params.order_by = "-rating"
        }
        params.content_type = "album"

        const minRating = params.min_rating

        const data: MusicBoardRatingsDTO | undefined =
            await $fetch<MusicBoardRatingsDTO>(apiEndpoint, {
                method: "get",
                params: params,
            }).catch((err) => {
                throw Error(err)
            })

        // const data: MusicBoardDTO | undefined = await fetchApiResponse(
        //     pageUrl,
        //     apiEndpoint,
        //     params
        // )
        if (data == undefined) {
            throw Error("Data is empty")
        }
        if (minRating != undefined) {
            data.results = data.results.filter((e) => e.rating >= minRating * 2)
        }
        return data
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        })
    }
})
