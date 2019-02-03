import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.1.104:9090/api.php/',
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar' }
});

//请求拦截处理
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//返回拦截处理
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export const req = async (uri, req_data={},method='get') => {
    console.log('axoid req')
    try {
        if(method==='post'){
            var { data= {}, status=200, statusText= 'OK', headers= {},config={} } = await instance.post(uri,req_data);
        }else{
            var { data= {}, status=200, statusText= 'OK', headers= {},config={} } = await instance.get(uri,{
                params: req_data
            });
        }

        console.log(data);
        console.log(config);
    } catch (error) {
        console.error(error);
    }
}