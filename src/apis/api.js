import axios from "axios";

//creating backend confug
const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
        // 'authorization': `Bearer ${localStorage.getItem('token')}`
    }
    //test api


});

//make a config for token
const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
    }

}

//test api
export const testApi = () => api.get('/test')
//register api
export const registerUserApi = (data) => api.post('/api/user/create', data)  //first data is to store and second data is to send data

// login api
export const loginUserApi = (data) => api.post('/api/user/login', data)

//create product api
export const createProductApi = (data) => api.post('/api/product/create', data)

//get all products api
export const getAllProducts = () => api.get('/api/product/get_all_products', config)

//get single products
export const getSingleProduct = (id) => api.get(`/api/product/get_single_product/${id}`, config)

//delete product
export const deleteProduct = (id) => api.delete(`/api/product/delete_product/${id}`, config)

//update product 
export const updateProduct = (id, data) => api.put(`/api/product/update_product/${id}`, data, config)

//forget password
export const forgetPasswordApi= (data) => api.post('/api/user/forget_password', data)

//verify otp
export const verifyOtpApi = (data) => api.post('/api/user/verify_otp', data)