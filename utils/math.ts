export function clamp(number: number, min: number, max: number) {
    return Math.max(min, Math.min(number, max))
}

export function between(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}
