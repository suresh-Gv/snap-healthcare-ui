// src/services/userService.js
import http from './http';
// import { useDispatch } from 'react-redux';
// import {setProfileDetails} from '../store/ProfileSlice';


const Clinicervice = {
  //GET PROFILE
//   getPermissionList: async () => {
//       try {
//         //api/permissions/by-screen
//         const response = await http.GET(`permissions/by-screen`);
//         if(response.status===200 && response.data){
//           const resData = response.data;
//           if(resData.code===200 && resData.data){
//             // UserService.storeProfile(resData.data);
//             console.log('resData.data',resData.data);
//             return resData.data;
//           }
//         }
//         return null;
//       } catch (error) {
//         // console.error('Error fetching user:', error);
//         throw error;
//       }
//     },
    // getPermission: async (clinicId) => {
    //   try {
    //     //api/permissions/by-screen
    //     const response = await http.GET(`clinic/${clinicId}`);
    //     if(response.status===200 && response.data){
    //       const resData = response.data;
    //       if(resData.code===200 && resData.data){
    //         // UserService.storeProfile(resData.data);
    //         console.log('resData.data',resData.data);
    //         return resData.data;
    //       }
    //     }
    //     return null;
    //   } catch (error) {
    //     // console.error('Error fetching user:', error);
    //     throw error;
    //   }
    // },
    getClinicList: async (query={}) => {
      const queryString = new URLSearchParams(query).toString();
      //?${queryString}
      try {
        
        const response = await http.GET(`clinics`);
        if(response.status===200 && response.data){
          const resData = response.data;
          if(resData.code===200 && resData.data){
            return resData.data;
          }
        }
        return null;
      } catch (error) {
        console.error('Error fetching user:', error);
        // throw error;
      }
    },
    //Save user
    saveClinic:async (data)=>{
      try {
        const response = await http.POST(`clinics`,data)
        console.log('response',response);
          if(response.status && response.data){
            const resData = response.data;
            if((resData.code===200 || resData.code===201) && resData.data){
              return resData.data;
            }else{
              return resData;
            }
          }
      } catch (error) {
        console.error('Error fetching user:', error);
        if(error.status){
          const resData = error.data;
          if(resData.code && resData.data){
              return resData;
          }
        }
        
        // throw error;
      }  
    },

     //Save user
     updateClinic:async (clinicId,data)=>{
      try {
        const response = await http.PUT(`clinics/${clinicId}`,data);
        if(response.status===200 && response.data){
          const resData = response.data;
          if(resData.code===200 && resData.data){
            // UserService.storeProfile(resData.data);
           
            return resData.data;
          }else{
            return null;
          }
        }else{
          return null;
        }
      } catch (error) {
        if(error.status){
          const resData = error.data;
          if(resData.code && resData.data){
              return resData;
          }
        }
        console.error('Error fetching user:', error);
        throw error;
      }  
    },
    //Delete clinic
    deleteClinic:async (clinicId)=>{
        try {
          const response = await http.DELETE(`clinics/${clinicId}`);
          if(response.status && response.data){
            const resData = response.data;
            if((resData.code===200 || resData.code===201)  && resData.data){
              return resData.data;
            }else{
              return null;
            }
          }else{
            return null;
          }
        } catch (error) {
          if(error.status){
            const resData = error.data;
            if(resData.code && resData.data){
                return resData;
            }
          }
          console.error('Error fetching user:', error);
          throw error;
        }  
      },
    
    
  };
  
  export default Clinicervice;