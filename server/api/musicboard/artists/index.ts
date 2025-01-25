import puppeteer from "puppeteer"
import { Background, MusicBoard } from "~/entities"

import _ from "lodash"

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
        params.content_type = "artist"

        const minRating = params.min_rating

        const data: MusicBoardArtistsDTO | undefined =
            await $fetch<MusicBoardArtistsDTO>(apiEndpoint, {
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

        // data.results = data.results.filter(
        //     (e) => Object.keys(e.background).length > 0
        // )
        data.results = _.uniqBy(data.results, "content.uid")
        return data
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        })
    }
})
