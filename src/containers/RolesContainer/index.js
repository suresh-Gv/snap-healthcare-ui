import {Route, Routes } from 'react-router-dom';
// import { Outlet } from "react-router-dom";
import RolesList from './RolesList';
// import UserAdd from './UserAdd';
// import UserDetailView from './UserDetailView';
import Wrap from '../../hoc/Wrap';

const RolesContainer = () => {

  return (
    <Wrap>  
      {/* Other common elements in UserContainer */}
      <Routes>
        <Route path="/" key={0}  element={<RolesList />} />
        {/* <Route path="/edit/:roleId" key={1}  element={<RolesList />} /> */}
        {/* <Route path="add" key={2} element={<UserAdd/>} />
        <Route path="detailview/:userId" key={3} element={<UserDetailView/>} /> */}
      </Routes>
      {/* <Outlet /> */}
  
     
        
    </Wrap>
  );
};






export default RolesContainer;
