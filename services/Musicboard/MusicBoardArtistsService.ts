import { MusicBoard, MusicBoardArtists, MusicBoardRatings } from "~/entities"
import { MusicBoardService } from "./MusicBoardService"

export class MusicBoardArtistsService extends MusicBoardService {
    override apiEndpoint = "artists"

    protected override transform(
        data: MusicBoardArtistsDTO
    ): MusicBoardArtists {
        return new MusicBoardArtists(data)
    }

    public override GetUrl(): string {
        return `${this.endpoint}/${this.apiEndpoint}/artists`
    }

    async Get(
        inParams?: MB_params
    ): Promise<NetworkResponse<MusicBoardArtists>> {
        return super.GetData(inParams)
    }
}
