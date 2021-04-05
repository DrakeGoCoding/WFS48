import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8789",
    timeout: 20000
})

export const getAllPosts = () => {
    return instance.get('/posts');
}

export const deletePostByID = (id) => {
    return instance.delete('/deletePost/' + id);
}

export const addNewPost = (body) => {
    return instance.post('/newPost', body);
}