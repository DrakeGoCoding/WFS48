import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8789/post",
    timeout: 20000
})

export const getAllPosts = () => {
    return instance.get('/');
}

export const updatePost = (body) => {
    return instance.put('/', body)
}

export const deletePostByID = (id) => {
    return instance.delete('/' + id);
}

export const addNewPost = (body) => {
    return instance.post('/', body);
}