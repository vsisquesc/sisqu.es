import { MusicBoard, MusicBoardRatings } from "~/entities"
import { MusicBoardService } from "./MusicBoardService"

export class MusicBoardRatingsService extends MusicBoardService {
    override apiEndpoint = "ratings/"
    private url = "ratings/"
    private artists_url = "ratings/artists"

    protected override transform(
        data: MusicBoardRatingsDTO
    ): MusicBoardRatings {
        return new MusicBoardRatings(data)
    }

    async Get(
        inParams?: MB_params
    ): Promise<NetworkResponse<MusicBoardRatings>> {
        return super.GetData(this.url, inParams)
    }

    async GetArtists(
        inParams?: MB_params
    ): Promise<NetworkResponse<MusicBoardRatings>> {
        return super.GetData(this.artists_url, inParams)
    }
}
