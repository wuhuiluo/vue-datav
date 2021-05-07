import axios from 'axios'

const service = axios.create({
    baseURL: 'https://apis.imooc.com',
    timeout: 5000
})