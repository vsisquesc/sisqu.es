import { MusicBoard } from "~/entities"
import { Service } from "../Service"

export class MusicBoardService extends Service<MusicBoard, MusicBoardDTO> {
    private pageURL =
        "https://musicboard.app/vsc/reviews?content_type=album&order_by=-created_at"

    endpoint = "https://api.musicboard.app/v2"

    protected override transform(data: MusicBoardDTO): MusicBoard {
        throw new Error("Method not implemented.")
    }
    private defaultParams: MB_params = {
        limit: 16,
        offset: 0,
        order_by: "-created_at",
        creator: "55a815b3-fb1f-4c3a-8da8-029833dbf071",
        speedup: true,
    }

    async GetData(
        url: string,
        inParams?: MB_params
    ): Promise<NetworkResponse<MusicBoard>> {
        const $api = Service.useApi()

        const endpoint = "/api/musicboard"
        const params = { ...this.defaultParams, ...inParams }

        const res: NetworkResponse<MusicBoardRatingsDTO> =
            await $api<MusicBoardRatingsDTO>(`${endpoint}/${url}`, {
                method: "get",
                params: {
                    pageUrl: this.pageURL,
                    apiEndpoint: `${this.endpoint}/${url}`,
                    parameters: params,
                },
            })
        //@ts-ignore
        const output: NetworkResponse<MusicBoard> = res
        output.data = res.ok ? this.transform(res.data!) : undefined
        return output
    }

    override async GetAll(): Promise<NetworkResponse<MusicBoard[]>> {
        throw new Error("Not implemented")
    }
    override async GetOne(uuid: string): Promise<NetworkResponse<MusicBoard>> {
        throw new Error("Not implemented")
    }
    override async Post(
        data: MusicBoard
    ): Promise<NetworkResponse<MusicBoard>> {
        throw new Error("Not implemented")
    }
    override async Put(data: MusicBoard): Promise<NetworkResponse<MusicBoard>> {
        throw new Error("Not implemented")
    }
}
