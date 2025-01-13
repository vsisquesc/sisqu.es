export default defineNuxtPlugin((nuxtApp) => {
    // const { session } = useUserSession()

    const FetchObject = $fetch.create({
        // baseURL: useRuntimeConfig().public.backEnd.remote,

        onRequest({ request, options, error }) {
            // if (session.value?.token) {
            //   // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
            //   options.headers.set("Authorization", `Bearer ${session.value?.token}`)
            // }
            // options.headers.set("Access-Control-Allow-Origin", "*")
            // options.headers.set(
            //     "Authorization",
            //     "Basic dXNlcjpiYzZkYjgzZC03MjJiLTRiNTQtYjEzOC00OWQxOWVjYWQxMzM="
            // )
        },
        onResponseError({ response }) {
            console.log(response)
        },
    })

    function api<T>(url: string, options?: any): Promise<NetworkResponse<T>> {
        return FetchObject(url, options)
            .then((data) => {
                return {
                    ok: true,
                    code: 200,
                    data: data as T,
                } as NetworkResponse<T>
            })
            .catch((err) => {
                var errMsg = err.stack
                if (err.data && err.data.errors) {
                    errMsg = errMsg + "\n" + err.data.errors.join(",")
                }
                return {
                    ok: false,
                    code: err.status || 500,
                    message: errMsg || "error desconocido",
                } as NetworkResponse<T>
            })
    }

    // Expose to useNuxtApp().$api
    return {
        provide: {
            api,
        },
    }
})
