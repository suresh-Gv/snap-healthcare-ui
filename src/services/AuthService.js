// src/services/authService.js
import http from './http';
import { persistor } from '../store';

const AuthService = {
  login: async (credentials) => {
    const {email,password} = credentials;
    const params = `email=${email}&password=${password}`;
    try {
      const response = await http.POST('login?'+params, credentials);
      // Handle token storage, session management, etc.
      // console.log('responseData',response);
      if(response.status===200 && response.data){
            const resData = response.data;
            if(resData.code===200 && resData.data){
                // console.log('responseData',resData.data);
                AuthService.storeToken(resData.data.access_token);
              
                return response.data;
            }else{
                return null;
            }
      }else{
        return null;
      }
      
    
    } catch (error) {
      console.log('Error during login:', error);
    //   throw error;
    }
  },
  
  logout: async () => {
    try {
      // Perform logout actions, e.g., invalidate token
      // Optionally, you might also make an API call to log out on the server
      persistor.purge();
      AuthService.removeToken();
    } catch (error) {
    //   console.error('Error during logout:', error);
    //   throw error;
    }
  },
  storeToken: (token) => {
    localStorage.setItem('access_token', token);
  },
  removeToken: () => {
    // Remove the token from storage
    
    localStorage.removeItem('access_token');
  },
  getToken: () => {
    // Remove the token from storage
    return localStorage.getItem('access_token');
  },
  isAuthenticated: () => {
    // Assuming you store the authentication token in localStorage
    const token = localStorage.getItem('access_token');

    // Check if the token exists and is not expired
    return !!token; // You might want to enhance this with token expiration checks
  },
};

export default AuthService;