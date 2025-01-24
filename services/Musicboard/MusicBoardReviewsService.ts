import { MusicBoard, MusicBoardReviews } from "~/entities"
import { Service } from "../Service"
import { MusicBoardService } from "./MusicBoardService"

export class MusicBoardReviewsService extends MusicBoardService {
    override apiEndpoint = "reviews/"

    protected override transform(
        data: MusicBoardReviewsDTO
    ): MusicBoardReviews {
        return new MusicBoardReviews(data)
    }
    async Get(
        inParams?: MB_params
    ): Promise<NetworkResponse<MusicBoardReviews>> {
        return super.GetData("reviews", inParams)
    }
}
