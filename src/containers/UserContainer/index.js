import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetailView from './UserDetailView';

const UserContainer = () => {
  return (
    <div>  
      <h1>User Container</h1>
     
      {/* Other common elements in UserContainer */}
      <Routes>
        <Route path="list" key={0} layoutType={'App'} element={<UserList/>} />
        <Route path="add" key={2} element={<UserAdd/>} />
        <Route path="detailview/:userId" key={3} element={<UserDetailView/>} />
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
};






export default UserContainer;
