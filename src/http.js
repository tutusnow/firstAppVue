import axios from 'axios';
import router from './router';
import { Message } from 'element-ui';

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1OGZhOWVkMi0wNTcxLTQ2Y2MtYWRmNy05YzQ5OWJjMDRmYTgiLCJpYXQiOjE1OTM1OTM3NTAsInN1YiI6IjM1MjZjOTlkLTI2N2MtNDhmMi04Njg3LWVjNDkyNGIzOWE0NiIsImlzcyI6IlNlY3VyaXR5IENlbnRlciIsImRlcGFydG1lbnQiOnsiaWQiOiIxNSIsInBhcmVudElkIjoiMCIsImRlcHRoIjoxLCJuYW1lIjoi6buR6b6Z5rGf55yBIiwiY29kZSI6IjIzMDAwMDAwMDAwMCJ9LCJpZCI6IjM1MjZjOTlkLTI2N2MtNDhmMi04Njg3LWVjNDkyNGIzOWE0NiIsImlkQ2FyZCI6IjIzMTA4MzE5OTEwMzA4NDcyNSIsInBjYXJkIjoiNzg5NDU2IiwibmFtZSI6Iumbqi3nrqHnkIblkZgiLCJqb2IiOlt7ImNvZGUiOiIyMDAwMDIiLCJuYW1lIjoi566h55CG5ZGYIn1dLCJjb250YWN0IjoiMTUwNDY2ODA0MDIiLCJpc0FkbWluIjowLCJhcHBOYW1lIjoi5Yqe5qGI5Yy6IiwiZXhwIjoxNTk1NjY3MzUwfQ.dL7alRN1S3Le9x2uZEBD-w5sE80zWrunIxCbSDvIuQk';

const http = axios.create({
    // baseURL: 'http://192.168.40.1:8100',
    timeout: 1000 * 5,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: token,
    }
});


//http://192.168.40.1:7500/appointment/listAppointmentPgListPage
// 响应拦截器
http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log('error-=------------->', error);
        //   if (error.response) {
        //     switch (error.response.status) {
        //       // 如果后端返回没有权限
        //       case 401:
        //         // 清除token信息并跳转到登录页面
        //         localStorage.clear();
        //         router.replace("/signin");
        //     }
        //   }
        //   return Promise.reject(error.response.data); // 返回接口返回的错误信息
    }

);

export default http;
