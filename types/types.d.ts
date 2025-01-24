type NetworkResponse<T> = {
    ok: boolean
    code: number
    message?: string
    data?: T
}

type ImageScroller = {
    src: string
    width: number
    top: number
    left: number
}

type DTO =
    | MusicBoardDTO
    | ReviewDTO
    | RatingDTO
    | CreatorDTO
    | ContentDTO
    | BackgroundDTO
    | ArtistDTO
    | RatigArtistDTO
