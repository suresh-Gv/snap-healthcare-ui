import React, { useEffect} from "react";
// import Selectlist  from "../../components/UI/FormInputs/SelectList";
// import { useNavigate } from 'react-router-dom';
// import UserService from "../../services/UserService";
// import TableGrid from "../../components/UI/TableGrid";
// import RolesService from "../../services/RoleService";

const DashboardContainer = () => {
  // useEffect(()=>{
  //   RolesService.fetchRolesList();
  // },[])
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
