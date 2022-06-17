import axios from 'axios'

const _url = 'http://localhost:3001/api'
export const API_URL = process.env.REACT_APP_API_URL || _url

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(config => config, async error => {
    if (error.response?.status === 401 && error.config && !error.config._isRetry) {
        error.config._isRetry = true
        try {
            const response = await $api.get('/refresh')
            localStorage.setItem('token', response.data?.accessToken)
            return $api.request(error.config)
        } catch (e) {
            console.log(e)
        }
    }
    throw error
})

