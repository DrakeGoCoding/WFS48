import axios from 'axios'

const port = 8080
const axiosInstance = axios.create({
    baseURL: `http://localhost:${port}`
})

export const getRestaurant = () => {
    return axiosInstance.get('/restaurant');
}

export const getStudent = () => {
    return axiosInstance.get('/student');
}