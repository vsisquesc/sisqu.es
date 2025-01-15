import { Entity } from "../Entity"
import { MusicBoard } from "./MusicBoard"
import { Review } from "./Review"

export class MusicBoardReviews extends MusicBoard {
    results: Review[]

    constructor(input: MusicBoardReviewsDTO) {
        super(input)

        this.results = input.results.map((e) => new Review(e))
    }
}
