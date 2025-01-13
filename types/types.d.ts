type NetworkResponse<T> = {
    ok: boolean
    code: number
    message?: string
    data?: T
}

type DTO =
    | MusicBoardDTO
    | ReviewDTO
    | RatingDTO
    | CreatorDTO
    | ContentDTO
    | BackgroundDTO
    | ArtistDTO
