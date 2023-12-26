// src/services/userService.js
import http from './http';

const userService = {
    getUser: async (userId) => {
      try {
        const response = await http.GET(`/users/${userId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
      }
    },
    updateUser: async (userId, updatedUserData) => {
      try {
        const response = await http.PUT(`/users/${userId}`, updatedUserData);
        return response.data;
      } catch (error) {
        console.error('Error updating user:', error);
        throw error;
      }
    },
  
    createUser: async (userData) => {
      try {
        const response = await http.POST('/users', userData);
        return response.data;
      } catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
    },
  
    deleteUser: async (userId) => {
      try {
        const response = await http.DELETE(`/users/${userId}`);
        return response.data;
      } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
      }
    },
  };
  
  export default userService;