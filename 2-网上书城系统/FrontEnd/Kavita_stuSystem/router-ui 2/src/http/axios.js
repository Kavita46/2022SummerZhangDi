import axios from 'axios'
// 拦截请求

import router from '../router'
let myaxios = axios.create({
    baseURL: 'http://summerzhangdi.nat300.top/',
    timeout: 3000
    // 超时
})
myaxios.interceptors.response.use(config => {
    // 发送请求之后返回的数据(res.send?)
    console.log('axios 返回config')
    console.log(config);
    return config.data;
    // err.response.status ==401
}, err => {
    if (err.response) {
        console.log('axios报错信息')
        console.log(err.response)
        // alert('请登录');
        // router.push('/user/login');
    }
})

// 取得token 否则拦截
myaxios.interceptors.request.use(config => {
    // axios里写 跨域请求头
    // config.headers.Authorization = localStorage.getItem('token');
    return config;
})
export default myaxios