import { Entity } from "../Entity"
import { Background } from "./Background"
import { Content } from "./Content"
import { Creator } from "./Creator"

export class Rating extends Entity {
    uid: string
    id: number
    rating: number
    first_listen: boolean
    review_uid: string
    review_url_slug: string
    content: Content
    creator: Creator
    created_at: Date
    listened_at: Date
    show_listened_at: boolean
    private: boolean
    private_locked: boolean
    like_count: number
    comment_count: number
    type: string
    background: Background
    comments_privacy: number

    constructor(input: RatingDTO) {
        super(input)

        this.uid = input.uid
        this.id = input.id
        this.rating = input.rating
        this.first_listen = input.first_listen
        this.review_uid = input.review_uid
        this.review_url_slug = input.review_url_slug
        this.content = new Content(input.content)
        this.creator = new Creator(input.creator)
        this.created_at = input.created_at
        this.listened_at = input.listened_at
        this.show_listened_at = input.show_listened_at
        this.private = input.private
        this.private_locked = input.private_locked
        this.like_count = input.like_count
        this.comment_count = input.comment_count
        this.type = input.type
        this.background = new Background(input.background)
        this.comments_privacy = input.comments_privacy
    }

    public override ToDTO(): RatingDTO {
        return {
            uid: this.uid,
            id: this.id,
            rating: this.rating,
            first_listen: this.first_listen,
            review_uid: this.review_uid,
            review_url_slug: this.review_url_slug,
            content: this.content.ToDTO(),
            creator: this.creator.ToDTO(),
            created_at: this.created_at,
            listened_at: this.listened_at,
            show_listened_at: this.show_listened_at,
            private: this.private,
            private_locked: this.private_locked,
            like_count: this.like_count,
            comment_count: this.comment_count,
            type: this.type,
            background: this.background.ToDTO(),
            comments_privacy: this.comments_privacy,
        } as RatingDTO
    }
}
