import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetailView from './UserDetailView';
import Wrap from '../../hoc/Wrap';

const UserContainer = () => {

  return (
    <Wrap>  
      {/* Other common elements in UserContainer */}
      <Routes>
        <Route path="/" key={0} layoutType={'App'} element={<UserList/>} />
        <Route path="add" key={2} element={<UserAdd/>} />
        <Route path="detailview/:userId" key={3} element={<UserDetailView/>} />
      </Routes>
      {/* <Outlet /> */}
  
     
        
    </Wrap>
  );
};






export default UserContainer;
