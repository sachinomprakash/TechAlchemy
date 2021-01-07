import axios from 'axios';
axios.defaults.baseURL = 'https://api.sheety.co/25b6736b5e891780708852af47e25069/';
axios.defaults.headers.common = {
    'Authorization': `Bearer %v$lQLAg8I^IOEfEFaJM$4CnqdI1%z$gP3`
}
export function AxiosInterceptor(): any {
    // Add a request interceptor
    axios.interceptors.request.use((request) => {
        // Do something before request is sent
        // document.body.classList.add('loading-indicator');
        return request;
    }, (error) => {
        // Do something with request error
        console.log('axios req error', error);
        _customException(error); // custom exception while request error occurred
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use((response) => {
        // Do something after response is received
        // document.body.classList.remove('loading-indicator');
        _customException(response); // custom exception incoming success response
        return response;
    }, (error) => {
        // Do something with response error
        document.body.classList.remove('loading-indicator');
        console.log('axios res error', error);
        _customException(error); // custom exception incoming response error occurred
        return Promise.reject(error);
    });
}

// custom exception display messages
const _customException = (response: any) => {
    if (response.status) {
        switch (response.status) {
            case 0:
                console.log(response.body)
                break;
            case 200:
                console.log(response);
                break;
            case 201:
                console.log(response);
                break;
            case 500:
                console.log(response);
                break;
            default: break;
        }

    }
}
