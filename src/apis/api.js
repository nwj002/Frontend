import axios from "axios";

//creating backend confug
const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    }
    //test api


});
//test api
export const testApi = () => api.get('/test')
//register api
export const registerUserApi = (data) => api.post('/api/user/create', data)  //first data is to store and second data is to send data

// login api
export const loginUserApi = (data) => api.post('/api/user/login', data)

//create product api
export const createProductApi = (data) => api.post('/api/product/create', data)

//get all products api
export const getAllProducts = () => api.get('/api/product/get_all_products')