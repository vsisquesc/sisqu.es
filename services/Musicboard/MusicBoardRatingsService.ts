import { MusicBoard, MusicBoardRatings } from "~/entities"
import { MusicBoardService } from "./MusicBoardService"

export class MusicBoardRatingsService extends MusicBoardService {
    override apiEndpoint = "ratings/"

    protected override transform(
        data: MusicBoardRatingsDTO
    ): MusicBoardRatings {
        return new MusicBoardRatings(data)
    }

    async Get(
        inParams?: MB_params
    ): Promise<NetworkResponse<MusicBoardRatings>> {
        return super.GetData("ratings", inParams)
    }
}
