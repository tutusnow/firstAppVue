import axios from 'axios';
import utils from './api'

    const windowURL = window.location.origin;

    let baseUrl = 'https://dip-data-forweb-service.test.k8s.chehejia.com/DIP-DATA-GENERAL-API';

    if (windowURL.indexOf('prod') > -1) {
        document.domain = 'chehejia.com'
        baseUrl = 'https://dip-data-forweb-service.prod.k8s.chehejia.com/DIP-DATA-GENERAL-API'
    } else if (windowURL.indexOf('test') > -1) {
        document.domain = 'chehejia.com'
        baseUrl = 'https://dip-data-forweb-service.test.k8s.chehejia.com/DIP-DATA-GENERAL-API'
    }

//response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.status === 500) {
            //重新登录
            utils.delCookie('AMP-Token')
        }
        return response;
    }
);

function request(method, url, data, base) {


    let urlStr = base ? url : `${baseUrl}${url}`;

    return new Promise((resolve, reject) => {
        let _option = {
            method,
            url: urlStr,
            params: method === 'get' ? data : '',
            data: data,
            headers: null,
            timeout: 30000,
            withCredentials: true,//是否携带cookie发起请求
            validateStatus: (status) => {
                return status >= 200 && status < 400
            },
        }
        axios.request(_option).then(res => {
            resolve(res.data)
        }, error => {
            if (error.response) {
                reject(error.response.data)
            } else {
                reject(error)
            }
        })
    })
}



export default request