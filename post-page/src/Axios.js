import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8789/",
    timeout: 20000
})

export const signIn = (body) => {
    return instance.post('/signin', body)
}

export const signUp = (body) => {
    return instance.post('/user', body)
}

export const getAllPosts = () => {
    return instance.get('/post');
}

export const updatePost = (body) => {
    return instance.put('/post', body)
}

export const deletePostByID = (id) => {
    return instance.delete('/post' + id);
}

export const addNewPost = (body) => {
    return instance.post('/post', body);
}