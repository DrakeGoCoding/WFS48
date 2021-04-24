import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8789/",
    timeout: 20000
})

instance.interceptors.request.use(req => {
    const token = localStorage.getItem('accessToken')
    req.headers['Authorization'] = 'Bearer ' + token
    return req
})

export const signIn = (body) => {
    return instance.post('/signin', body)
}

export const signUp = (body) => {
    return instance.post('/user', body)
}

export const getUserByID = (id) => {
    return instance.get('/user/' + id)
}

export const getAllPosts = () => {
    return instance.get('/post');
}

export const getPostByID = (id) => {
    return instance.get('/post/' + id)
}

export const updatePost = (body) => {
    return instance.put('/post', body)
}

export const deletePostByID = (id) => {
    return instance.delete('/post/' + id);
}

export const addNewPost = (body) => {
    return instance.post('/post', body);
}