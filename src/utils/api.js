import axios from "axios";

const instance = axios.create({
    baseURL: process.env.API_URL
        ? process.env.API_URL
        : "http://188.165.224.203:8080/api",
});


export default instance;
