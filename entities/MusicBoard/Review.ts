import { Entity } from "../Entity"
import { Creator } from "./Creator"
import { Rating } from "./Rating"

export class Review extends Entity {
    uid: string
    id: number
    url_slug: string
    title: string
    description: string
    detected_language: string
    rating: Rating
    pinned: boolean
    creator: Creator
    created_at: Date
    type: string
    private: boolean
    private_locked: boolean
    like_count: number
    comment_count: number
    comments_privacy: number

    constructor(input: ReviewDTO) {
        super(input)

        this.uid = input.uid
        this.id = input.id
        this.url_slug = input.url_slug
        this.title = input.title
        this.description = input.description
        this.detected_language = input.detected_language
        this.rating = new Rating(input.rating)
        this.pinned = input.pinned
        this.creator = new Creator(input.creator)
        this.created_at = input.created_at
        this.type = input.type
        this.private = input.private
        this.private_locked = input.private_locked
        this.like_count = input.like_count
        this.comment_count = input.comment_count
        this.comments_privacy = input.comments_privacy
    }

    public override ToDTO(): ReviewDTO {
        return {
            uid: this.uid,
            id: this.id,
            url_slug: this.url_slug,
            title: this.title,
            description: this.description,
            detected_language: this.detected_language,
            rating: this.rating.ToDTO(),
            pinned: this.pinned,
            creator: this.creator.ToDTO(),
            created_at: this.created_at,
            type: this.type,
            private: this.private,
            private_locked: this.private_locked,
            like_count: this.like_count,
            comment_count: this.comment_count,
            comments_privacy: this.comments_privacy,
        } as ReviewDTO
    }
}
