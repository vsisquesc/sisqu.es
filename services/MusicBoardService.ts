import { MusicBoard } from "~/entities"
import { Service } from "./Service"

export class MusicBoardService extends Service<MusicBoard, MusicBoardDTO> {
    private pageURL =
        "https://musicboard.app/vsc/reviews?content_type=album&order_by=-created_at"
    endpoint = "https://api.musicboard.app/v2"
    private review_url = "reviews/"

    private defaultParams: MB_params = {
        limit: 16,
        offset: 0,
        order_by: "-created_at",
        creator: "55a815b3-fb1f-4c3a-8da8-029833dbf071",
        speedup: true,
    }

    protected override transform(data: MusicBoardDTO): MusicBoard {
        return new MusicBoard(data)
    }

    async Get(inParams?: MB_params): Promise<NetworkResponse<MusicBoard>> {
        const $api = Service.useApi()

        const endpoint = "/api/musicboard"
        const params = { ...this.defaultParams, ...inParams }

        const res: NetworkResponse<MusicBoardDTO> = await $api<MusicBoardDTO>(
            endpoint,
            {
                method: "get",
                params: {
                    pageUrl: this.pageURL,
                    apiEndpoint: `${this.endpoint}/${this.review_url}`,
                    parameters: params,
                },
            }
        )

        return res
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
