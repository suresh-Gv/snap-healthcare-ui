import axios from 'axios';
import AuthService from './AuthService';

const API_URL = process.env.REACT_APP_API_URL;

//Default Headers
let headers = {
  'Content-Type': 'application/json',
};



const configAxios = axios.create({
    baseURL:  API_URL,
});

const requestHandler = request => {
    //Headers
    //Bearer Token
    if(AuthService.isAuthenticated()){
        const bearerToken = AuthService.getToken();
        request.headers  = {
            ...headers,
            'Authorization': `Bearer ${bearerToken}`,
        }
    }
    request.params = {
        // ...headers
        // access_token: accessToken
    }
    // console.log('request',request);
    return request;
};

const responseHandler = response => {
    if (response.status === 401) {
        // window.location = '/login';
    }
    return response;
};

//Request Error Handler
const requestErrorHandler = error => {
    return Promise.reject(error);
};

//Response Error Handler
const responseErrorHandler = error => {
    // handle the response error
    // console.log('reserror',error);
    /*1021 - Issue fix --start */
    try{
        if(error.response && error.response.data.error==="invalid_token"){
            // const {dispatch} = store;
            // console.log('invalid token');
            // localStorage.removeItem('access_token');
            // localStorage.removeItem('refresh_token');
            // localStorage.removeItem('user');
            // dispatch(failMessage(error.response.data.message));
            // document.location.href ='/login';
        }
        else if(error.response && (error.response.status===403)){
            console.log(error.response);
            // const {dispatch} = store;
            // dispatch(failMessage(error.response.data.message));
            //For checking session is expired or not and redirect to login page.
            
        }
    }catch(e){

    }
    // try{
    //     if (error.response.data.error === "invalid_token") {
    //         const { dispatch } = store;
    //         // dispatch(removeAuthentication());
    //     } else if (error.response && (error.response.status === 403)) {
    //         console.log('res1error', error,error.response);
    //         //For checking session is expired or not and redirect to login page.
    //     }
    // }catch(e){

    // }
    if(error.response !== undefined){
        return Promise.reject(error.response);
    }else{
        return Promise.reject(error);
    }
        /*1021 - Issue fix --end */

};


configAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => requestErrorHandler(error)
);

configAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => responseErrorHandler(error)
);

export default configAxios;