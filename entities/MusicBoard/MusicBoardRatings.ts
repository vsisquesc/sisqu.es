import { Entity } from "../Entity"
import { MusicBoard } from "./MusicBoard"
import { Rating } from "./Rating"

export class MusicBoardRatings extends MusicBoard {
    results: Rating[]

    constructor(input: MusicBoardRatingsDTO) {
        super(input)

        this.results = input.results.map((e) => new Rating(e))
    }
}
