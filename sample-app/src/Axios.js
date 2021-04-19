import axios from 'axios'

const instance = axios.create({
    timeout: 20000,
    baseURL: 'http://localhost:8789'
})

export const signIn = (body) => {
    return instance.post('/signin', body)
}

export const signUp = (body) => {
    return instance.post('/user', body)
}