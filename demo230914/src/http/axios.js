//引入axios
import axios from "axios";
//创建axios实例
const instance = axios.create({
    baseURL: 'http://api.jqrjq.cn/',//请求基地址
    timeout: 6000
})
// 请求拦截器
instance.interceptors.request.use((config) => {
    config.headers.token = "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDA1NTgxNjAsInN1YiI6ImFkbWluMTIzNCIsImlhdCI6MTY5Nzk2NjE2MDQ4NX0.iuENydD1b8VHAg-1gJVV0e3P9iSPGNMMN9ww1KQiPy_dxSUesOvyQTfIjFJ9FuFcE57yFGp1GwWxwGnTYyKxog";
    return config;
}, (err) => {
    return Promise.reject(err)
});

//响应拦截器
instance.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    return Promise.reject(err)
});
export default instance;