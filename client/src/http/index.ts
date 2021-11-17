import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
    baseURL: "http://localhost:8888",
    headers: {
        "Content-type": "application/json",
    },
});

export default http;
