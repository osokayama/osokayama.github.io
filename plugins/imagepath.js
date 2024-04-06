import {posix as pathlib} from 'path-browserify'

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