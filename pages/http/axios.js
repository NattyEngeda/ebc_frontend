import axios from "axios";

// const env = process.env;
// console.log(env.URL);

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
})

export default instance;