export default defineNuxtPlugin(() => {
    return {
        provide: {
            imagePath: (path) => {
                const runtimeConfig = useRuntimeConfig()
                const pathlib = require('path')
                return pathlib.join(runtimeConfig.app.baseURL, 'images', path)
            }
        }
    }
})