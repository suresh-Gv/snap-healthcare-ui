// src/services/userService.js
import http from './http';
// import { useDispatch } from 'react-redux';
// import {setProfileDetails} from '../store/ProfileSlice';


const UserService = {
  //GET PROFILE
  fetchProfile: async () => {
      try {
        
        const response = await http.GET(`user_profile`);
        if(response.status===200 && response.data){
          const resData = response.data;
          if(resData.code===200 && resData.data){
            UserService.storeProfile(resData.data);
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
    fetchUserList: async () => {
      try {
        
        const response = await http.GET(`users/by-role`);
        if(response.status===200 && response.data){
          const resData = response.data;
          if(resData.code===200 && resData.data){
            UserService.storeProfile(resData.data);
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
    getProfile:  () => {
      const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
          // If it exists, parse and return it
          try{
            // console.log('storedProfile',storedProfile);
            return JSON.parse(storedProfile);
          }catch(e){

          }
        }
    },
    //Save user
    saveUser:async (data)=>{
      try {
        const response = await http.POST(`users`,data)
        console.log("response from http saveUser",response.data);
          // if(response.status===200 && response.data){
          //   const resData = response.data;
          //   if(resData.code===200 && resData.data){
          //     return resData.data;
          //   }
          // }
        return null;
      } catch (error) {
        // console.error('Error fetching user:', error);
        throw error;
      }  
    },
    // STORE PROFILE
    storeProfile: (data) => {
      localStorage.setItem('userProfile',JSON.stringify(data));
    },
    //REMOVE PROFILE
    removeProfile: () => {
      // Remove the token from storage
      localStorage.removeItem('userProfile');
    },
    
  };
  
  export default UserService;