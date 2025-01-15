import puppeteer from "puppeteer"
import { MusicBoard } from "~/entities"

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const pageUrl: string = query.pageUrl as string
        const apiEndpoint: string = query.apiEndpoint as string
        const params: MB_params = JSON.parse(
            query.parameters as string
        ) as MB_params

        if (params.order_by == "-rating__rating") {
            params.order_by = "-rating"
        }

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
