import React, { useEffect} from "react";
import { useToast } from '../../context/ToaxtContext';

// import Selectlist  from "../../components/UI/FormInputs/SelectList";
// import { useNavigate } from 'react-router-dom';
// import UserService from "../../services/UserService";
// import TableGrid from "../../components/UI/TableGrid";
// import RolesService from "../../services/RoleService";

const DashboardContainer = () => {
  // useEffect(()=>{
  //   RolesService.fetchRolesList();
  // },[])
  const { showToast } = useToast();
  // const handleShowToast = () => {
  //   showToast('error', 'This is a success message');
  // };

  // showToast('success', 'This is a success message');
  return (
    <>
        <div className="row h-100">
          <div className="col-md-12 overflow-auto h-100">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <h1>Dashboard</h1>
                </div>
              </div>
              
           
            </div>
          </div>
        </div>
    </>
  );
};

export default DashboardContainer;
