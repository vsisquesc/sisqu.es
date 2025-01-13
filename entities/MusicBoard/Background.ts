import { Entity } from "../Entity"
import type { Creator } from "./Creator"

export class Background extends Entity {
    uid: string
    background_large: string
    background_small: string
    background_original: string

    constructor(input: BackgroundDTO) {
        super(input)

        this.uid = input.uid
        this.background_large = input.background_large
        this.background_small = input.background_small
        this.background_original = input.background_original
    }

    public override ToDTO(): BackgroundDTO {
        return {
            uid: this.uid,
            background_large: this.background_large,
            background_small: this.background_small,
            background_original: this.background_original,
        } as BackgroundDTO
    }
}
