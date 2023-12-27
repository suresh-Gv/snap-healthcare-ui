// src/services/userService.js
import http from './http';
// import { useDispatch } from 'react-redux';
// import {setProfileDetails} from '../store/ProfileSlice';


const RolesService = {
  //GET PROFILE
  fetchProfile: async () => {
      try {
        
        const response = await http.GET(`user_profile`);
        if(response.status===200 && response.data){
          const resData = response.data;
          if(resData.code===200 && resData.data){
            // UserService.storeProfile(resData.data);
            console.log('resData.data',resData.data);
            return resData.data;
          }
        }
        return null;
      } catch (error) {
        // console.error('Error fetching user:', error);
        throw error;
      }
    },
    fetchRolesList: async () => {
      try {
        
        const response = await http.GET(`roles`);
        if(response.status===200 && response.data){
          const resData = response.data;
          if(resData.code===200 && resData.data){
            // UserService.storeProfile(resData.data);
            console.log('resData.data',resData.data);
            return resData.data;
          }
        }
        return null;
      } catch (error) {
        // console.error('Error fetching user:', error);
        throw error;
      }
    },
    
    
  };
  
  export default RolesService;