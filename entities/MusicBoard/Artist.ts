import { Entity } from "../Entity"
import type { Background } from "./Background"
import type { Creator } from "./Creator"

export class Artist extends Entity {
    uid: string
    id: number
    name: string
    type: string
    picture: string
    url_slug: string
    deezer_id: number
    picture_large: string
    picture_small: string
    picture_medium: string

    constructor(input: ArtistDTO) {
        super(input)
        this.uid = input.uid
        this.id = input.id
        this.name = input.name
        this.type = input.type
        this.picture = input.picture
        this.url_slug = input.url_slug
        this.deezer_id = input.deezer_id
        this.picture_large = input.picture_large
        this.picture_small = input.picture_small
        this.picture_medium = input.picture_medium
    }

    public override ToDTO(): ArtistDTO {
        return {
            uid: this.uid,
            id: this.id,
            name: this.name,
            type: this.type,
            picture: this.picture,
            url_slug: this.url_slug,
            deezer_id: this.deezer_id,
            picture_large: this.picture_large,
            picture_small: this.picture_small,
            picture_medium: this.picture_medium,
        } as ArtistDTO
    }
}
