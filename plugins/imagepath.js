export default defineNuxtPlugin(() => {
    return {
        provide: {
            imagePath: (path) => {
                const runtimeConfig = useRuntimeConfig()
                return `${runtimeConfig.app.baseURL}/images/${path}`
            }
        }
    }
})