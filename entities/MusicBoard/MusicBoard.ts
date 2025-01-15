import { Entity } from "../Entity"
import { Rating } from "./Rating"

export class MusicBoard extends Entity {
    next?: string
    previous?: string

    constructor(input: MusicBoardDTO) {
        super(input)
        this.next = input.next
        this.previous = input.previous
    }

    public override ToDTO(): MusicBoardDTO {
        return {
            next: this.next,
            previous: this.previous,
            results: this.results?.map((e) => e.ToDTO()),
        } as MusicBoardReviewsDTO
    }
}
