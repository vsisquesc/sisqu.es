import { MusicBoard, MusicBoardArtists, MusicBoardRatings } from "~/entities"
import { MusicBoardService } from "./MusicBoardService"

export class MusicBoardArtistsService extends MusicBoardService {
    override apiEndpoint = "ratings/"

    protected override transform(
        data: MusicBoardArtistsDTO
    ): MusicBoardArtists {
        return new MusicBoardArtists(data)
    }

    async Get(
        inParams?: MB_params
    ): Promise<NetworkResponse<MusicBoardArtists>> {
        return super.GetData("artists", inParams)
    }
}
