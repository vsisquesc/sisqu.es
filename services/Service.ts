import type { Entity } from "~/entities/Entity"

export abstract class Service<T extends Entity, R> {
    protected abstract endpoint: string

    // Método abstracto para transformar datos
    protected abstract transform(data: R): T

    protected static useApi() {
        return useNuxtApp().$api
    }

    public GetUrl(): string {
        return `${this.endpoint}/`
    }

    async GetAll(url?: string): Promise<NetworkResponse<T[]>> {
        const $api = Service.useApi()

        const endpoint = url ? `${this.endpoint}/${url}` : `${this.endpoint}/`
        const res: NetworkResponse<R> = await $api<R>(endpoint)
        const output: NetworkResponse<T[]> = {
            ok: res.ok,
            code: res.code,
            message: res.message,
            data: res.ok
                ? (res.data as R[]).map((e) => this.transform(e as R))
                : undefined,
        }
        return output
    }

    async GetOne(uuid: string): Promise<NetworkResponse<T>> {
        const $api = Service.useApi()

        const res: NetworkResponse<R> = await $api<R>(
            `${this.endpoint}/${uuid}`
        )

        const output: NetworkResponse<T> = {
            ok: res.ok,
            code: res.code,
            message: res.message,
            data: res.ok ? this.transform(res.data as R) : undefined,
        }
        return output
    }

    async DeleteOne(url: string): Promise<NetworkResponse<T>> {
        const $api = Service.useApi()

        const res: NetworkResponse<R> = await $api<R>(
            `${this.endpoint}/${url}`,
            {
                method: "delete",
            }
        )

        const output: NetworkResponse<T> = {
            ok: res.ok,
            code: res.code,
            message: res.message,
            data: res.ok ? this.transform(res.data as R) : undefined,
        }
        return output
    }

    async Post(data: T): Promise<NetworkResponse<T>> {
        const $api = Service.useApi()
        const res: NetworkResponse<R> = await $api<R>(`${this.endpoint}/`, {
            method: "post",
            body: data.ToString(),
        })

        const output: NetworkResponse<T> = {
            ok: res.ok,
            code: res.code,
            message: res.message,
            data: res.ok ? this.transform(res.data as R) : undefined,
        }

        return output
    }

    async Put(data: T, id: string): Promise<NetworkResponse<T>> {
        const $api = Service.useApi()
        const uuid = id
        if (!uuid) {
            throw new Error("UUID is required for Put requests")
        }
        const res: NetworkResponse<R> = await $api<R>(
            `${this.endpoint}/${uuid}`,
            {
                method: "put",
                body: data.ToString(),
            }
        )

        const output: NetworkResponse<T> = {
            ok: res.ok,
            code: res.code,
            message: res.message,
            data: res.ok ? this.transform(res.data as R) : undefined,
        }

        return output
    }

    protected GetQueryParams(input: any) {
        const keys = Object.keys(input)
        const paramsArray = []
        for (let key of keys) {
            const value = input[key]
            if (value != undefined) {
                paramsArray.push(`${key}=${value}`)
            }
        }

        let params = "?" + paramsArray.join("&")

        return params
    }
}
