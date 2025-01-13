import { Entity } from "../Entity"
import { Review } from "./Review"

export class MusicBoard extends Entity {
    next?: string
    previous?: string
    results: Review[]

    constructor(input: MusicBoardDTO) {
        super(input)

        this.next = input.next
        this.previous = input.previous
        this.results = input.results.map((e) => new Review(e))
    }

    public override ToDTO(): MusicBoardDTO {
        return {
            next: this.next,
            previous: this.previous,
            results: this.results?.map((e) => e.ToDTO()),
        } as MusicBoardDTO
    }
}
