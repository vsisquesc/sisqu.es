async function fetchApiResponse(
    pageUrl: string,
    apiEndpoint: string,
    modifyParams?: MB_params
): Promise<MusicBoardDTO | undefined> {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setRequestInterception(true)

    return new Promise(async (resolve, reject) => {
        let apiResponse: MusicBoardDTO | undefined = undefined

        if (modifyParams != undefined) {
            page.on("request", async (request) => {
                const url = new URL(request.url())
                // Check if the request method is GET and the URL matches the API endpoint
                if (
                    request.method() === "GET" &&
                    url.href.includes(apiEndpoint)
                ) {
                    Object.keys(modifyParams).forEach((key) => {
                        url.searchParams.set(key, modifyParams[key])
                    })
                    request.continue({ url: url.toString() })
                } else {
                    request.continue()
                }
            })
        }
        // Listen for responses to network requests
        page.on("response", async (response) => {
            const url = response.url()
            const request = response.request()

            // Check if the request method is GET and the URL matches the API endpoint
            if (request.method() === "GET" && url.includes(apiEndpoint)) {
                try {
                    apiResponse = await response.json()
                    resolve(apiResponse) // Resolve the promise with the API response
                } catch (err) {
                    reject(`Error parsing API response: ${err.message}`)
                }
            }
        })

        try {
            await page.goto(pageUrl)
        } catch (err) {
            reject(`Error loading page: ${err.message}`)
        }

        // Close the browser after a timeout to prevent hanging
        setTimeout(() => {
            if (!apiResponse) {
                reject("API response not captured within the timeout.")
            }
            browser.close()
        }, 10000) // 10 seconds timeout
    }).then((output) => {
        browser.close()
        return output
    })
}
