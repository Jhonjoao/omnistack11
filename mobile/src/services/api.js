import axios from 'axios';

const api = axios.create({
    baseURL: 'http://<YOUR IP>:PORT'
    //configure your ip plus the port that is running your backend
})

export default api;