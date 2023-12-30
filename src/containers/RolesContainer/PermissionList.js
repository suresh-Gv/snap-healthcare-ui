import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { isSet } from "../../utils/commonUtils";
import RolesService from "../../services/RoleService";
import { Tables } from "./Tables";
import Buttons from "../../components/UI/Buttons";
import { useToast } from '../../context/ToaxtContext';
import { capitalizeFirstLetter } from "../../utils/commonUtils";
// import FormInputs from "../../components/UI/FormInputs";

export const PermissionList = () => {
  const { showToast } = useToast();
  const { roleId } = useParams();
  const decodedData = atob(roleId);
  const [rolId, roleName] = decodedData.split('##');

  const [permissonBody,setPermissionBody] = useState([]);
  const [permissons,setPermissions] = useState([]);
 

  useEffect(()=>{
   
    fetchPermission();
    fetchPermissioinList();
  },[]);

  const fetchPermissioinList = async ()=>{
    try{
      const data = await RolesService.getPermissionList();
      const permissionData = [];
      for(const key in data){
        let permissionObj = {
          label:key,
          data:data[key]
        };
        permissionData.push(permissionObj);
      }
      setPermissionBody(permissionData);
    }catch(e){

    }

  }
  const fetchPermission = async ()=>{
    try{
      const data = await RolesService.getPermission(rolId);

      let updatePermission = [];
      for(const key in data.permissions){
          
          for(const ky in data.permissions[key]){
            updatePermission = [
              ...updatePermission,
              data.permissions[key][ky]
            ]
          }
      }
      setPermissions(updatePermission);
    }catch(e){

    }

  }
  const tableHeaders = [
    { label: "Screen", key: "Create", type: "", inputType: "TextInput" },
    { label: "Listing Item", key: "Listing", inputType: "TextInput" },
    { label: "Permission Access ", key: "Permission Access" },

    // Add more columns as needed
  ];
 
  const permisssionHeading = [
    { label: "Screen" },
    { label: "Read" },
    { label: "Create" },
    { label: "Edit" },
    { label: "Delete" },
  ];
  const updatePermissionsHandler = async ()=>{
    const payload = {
      name: roleName,
      permissions:permissons
    };
    try{
      const data = await RolesService.updateRolePermission(rolId,payload);
      if(data.code===500){
        showToast('error', isSet(data.data,'Something went wrong..'));
      }else{
        showToast('success', 'Roles permission updated successfully');
        fetchPermission();
      }
    }catch(e){

    }
  }


  return (
    <>
      
        <div className="row h-100">
          <div className="col-md-12 overflow-auto1 h-100">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group d-flex mb-0 justify-content-between align-items-center">
                      <div>Permission Control - {capitalizeFirstLetter(roleName)}</div>
                      
                      <div className="addAction">
                        <div className="btn-group ">
                         
                          <Buttons clickHandler={()=>updatePermissionsHandler()} className="btn btn-primary" label={'Save'} acl={['role-edit']} />
                          <Buttons href='/roles' className="btn btn-outline-secondary rounded-pill1" label={'Back'} acl={['role-list']} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Tables
                tableHeaders={tableHeaders}
                permisssionHeading={permisssionHeading}
                permissonBody={permissonBody}
                permissons={permissons}
                setPermissions={setPermissions}
              />
            </div>
          </div>
        </div>
    </>
  );
};
