type MB_params = {
    limit?: number
    offset?: number
    order_by?: string
    creator?: string
    pinned?: boolean
    title?: string
    has_reports?: boolean
    content_type?: string
    genres__id?: string
    styles__id?: string
    release_date__year?: string
    release_date__lte?: Date
    release_date__gte?: Date
    record_type?: string
    private?: boolean
    speedup?: boolean
}

type MusicBoardDTO = {
    next?: string
    previous?: string
    results: ReviewDTO[]
}

type ReviewDTO = {
    uid: string
    id: number
    url_slug: string
    title: string
    description: string
    detected_language: string
    rating: RatingDTO
    pinned: boolean
    creator: CreatorDTO
    created_at: Date
    type: string
    private: boolean
    private_locked: boolean
    like_count: number
    comment_count: number
    comments_privacy: number
}

type RatingDTO = {
    uid: string
    id: number
    rating: number
    first_listen: boolean
    review_uid: string
    review_url_slug: string
    content: ContentDTO
    creator: CreatorDTO
    created_at: Date
    listened_at: Date
    show_listened_at: boolean
    private: boolean
    private_locked: boolean
    like_count: number
    comment_count: number
    type: string
    background: BackgroundDTO
    comments_privacy: number
}

type CreatorDTO = {
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
}

type ContentDTO = {
    uid: string
    id: number
    type: string
    cover: string
    title: string
    artist: ArtistDTO
    url_slug: string
    deezer_id: number
    cover_large: string
    cover_small: string
    record_type: string
    cover_medium: string
}

type BackgroundDTO = {
    uid: string
    background_large: string
    background_small: string
    background_original: string
}

type ArtistDTO = {
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
}
