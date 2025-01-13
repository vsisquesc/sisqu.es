import { Entity } from "../Entity"
import { Artist } from "./Artist"

export class Content extends Entity {
    uid: string
    id: number
    type: string
    cover: string
    title: string
    artist: Artist
    url_slug: string
    deezer_id: number
    cover_large: string
    cover_small: string
    record_type: string
    cover_medium: string

    constructor(input: ContentDTO) {
        super(input)

        this.uid = input.uid
        this.id = input.id
        this.type = input.type
        this.cover = input.cover
        this.title = input.title
        this.artist = new Artist(input.artist)
        this.url_slug = input.url_slug
        this.deezer_id = input.deezer_id
        this.cover_large = input.cover_large
        this.cover_small = input.cover_small
        this.record_type = input.record_type
        this.cover_medium = input.cover_medium
    }

    public override ToDTO(): ContentDTO {
        return {
            uid: this.uid,
            id: this.id,
            type: this.type,
            cover: this.cover,
            title: this.title,
            artist: this.artist.ToDTO(),
            url_slug: this.url_slug,
            deezer_id: this.deezer_id,
            cover_large: this.cover_large,
            cover_small: this.cover_small,
            record_type: this.record_type,
            cover_medium: this.cover_medium,
        } as ContentDTO
    }
}
