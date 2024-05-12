import axios from "axios";

//creating backend confug
const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
    //test api


});
//test api
export const testApi = () => api.get('/test')
//register api
export const registerUserApi = (data) => api.post('/api/user/create', data)  //first data is to store and second data is to send data