export abstract class Entity {
    protected disabledKeys: string[] = []

    constructor(input: DTO) {
        Object.keys(input).forEach((key) => {
            if ((input as any)[key] === null) {
                ;(input as any)[key] = undefined
            }
        })
    }

    ToDTO() {
        throw new Error("Not implemented")
    }

    ToString() {
        return JSON.stringify(this, (key, value) => {
            if (
                ["displayName", "displayID"].includes(key) ||
                this.disabledKeys.includes(key) ||
                key == "disabledKeys"
            ) {
                return undefined
            }
            return value
        })
    }
}
