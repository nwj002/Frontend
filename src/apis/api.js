import axios from "axios";

//creating backend confug
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
    //test api


});
export const testApi = () => api.get('/test')
// export const registerApi = (data) => api.post('/register', data)