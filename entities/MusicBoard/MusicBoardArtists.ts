import { Entity } from "../Entity"
import { MusicBoard } from "./MusicBoard"
import { RatingArtist } from "./RatingArtist"

export class MusicBoardArtists extends MusicBoard {
    results: RatingArtist[]

    constructor(input: MusicBoardArtistsDTO) {
        super(input)

        this.results = input.results.map((e) => new RatingArtist(e))
    }
}
