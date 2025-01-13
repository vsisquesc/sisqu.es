import { Entity } from "../Entity"

export class Creator extends Entity {
    uid: string
    username: string
    name: string
    profile_picture: string
    profile_picture_small: string
    profile_picture_medium: string
    profile_picture_large: string
    is_pro: boolean
    tier?: string
    is_verified: boolean
    is_moderator: boolean
    contributor_tier?: string
    type: string
    biography: string
    website: string
    twitter: string
    profile_frame?: string
    profile_effect?: string
    color_theme?: string
    use_theme_on_content: boolean

    constructor(input: CreatorDTO) {
        super(input)

        this.uid = input.uid
        this.username = input.username
        this.name = input.name
        this.profile_picture = input.profile_picture
        this.profile_picture_small = input.profile_picture_small
        this.profile_picture_medium = input.profile_picture_medium
        this.profile_picture_large = input.profile_picture_large
        this.is_pro = input.is_pro
        this.tier = input.tier
        this.is_verified = input.is_verified
        this.is_moderator = input.is_moderator
        this.contributor_tier = input.contributor_tier
        this.type = input.type
        this.biography = input.biography
        this.website = input.website
        this.twitter = input.twitter
        this.profile_frame = input.profile_frame
        this.profile_effect = input.profile_effect
        this.color_theme = input.color_theme
        this.use_theme_on_content = input.use_theme_on_content
    }

    public override ToDTO(): CreatorDTO {
        return {
            uid: this.uid,
            username: this.username,
            name: this.name,
            profile_picture: this.profile_picture,
            profile_picture_small: this.profile_picture_small,
            profile_picture_medium: this.profile_picture_medium,
            profile_picture_large: this.profile_picture_large,
            is_pro: this.is_pro,
            tier: this.tier,
            is_verified: this.is_verified,
            is_moderator: this.is_moderator,
            contributor_tier: this.contributor_tier,
            type: this.type,
            biography: this.biography,
            website: this.website,
            twitter: this.twitter,
            profile_frame: this.profile_frame,
            profile_effect: this.profile_effect,
            color_theme: this.color_theme,
            use_theme_on_content: this.use_theme_on_content,
        } as CreatorDTO
    }
}
