import pkg from 'path-browserify'
const pathlib = pkg.posix

export default defineNuxtPlugin(() => {
    return {
        provide: {
            imagePath: (path) => {
                const runtimeConfig = useRuntimeConfig()
                return pathlib.join(runtimeConfig.app.baseURL, 'images', path)
            }
        }
    }
})