import {$api} from './axios.interceptor'

interface UserData {
    email: string
    password: string
    login: string
}

export class AuthService {
    static async registration(userData: UserData) {
        const {email, password, login} = userData
        const response = await $api.post('/registration', {login, email, password})
        localStorage.setItem('token', response.data.accessToken)
        return response
    }

    static async login(userData: UserData) {
        const {email, password} = userData
        const response = await $api.post('/login', {email, password})
        localStorage.setItem('token', response.data.accessToken)
        return response
    }

    static async logout() {
        await $api.post('/logout')
        localStorage.removeItem('token')
    }
}
