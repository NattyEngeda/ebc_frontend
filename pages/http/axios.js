import axios from "axios";

// const env = process.env;
// console.log(env.URL);

const instance = axios.create({
    baseURL: 'http://localhost:8000',
})

export default instance;
