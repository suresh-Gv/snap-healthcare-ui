import React, { useEffect, useState } from "react";
import Selectlist from "../../components/UI/FormInputs/SelectList";
import TableGrid from "../../components/UI/TableGrid";
import { AddFormModal } from "../DashboardContainer/AddFormModal";
import UserService from "../../services/UserService";
import http from "../../services/http";
import RolesService from "../../services/RoleService";

const UserList = () => {
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    dateofbirth:''
  });
  const [roles,setRoles]=useState([]);
  const tableHeaders =  [
    { label: '',key:'isActive',type:'checkBox',inputType:'checkBox'},
    { label: 'Role',key:'role',type:''},
    { label: 'First Name',key:'firstName',dataType:''},
    { label: 'last Name',key:'lastName',dataType:''},
    { label: 'DOB',key:'dob',dataType:''},
    { label: 'Email',key:'email',dataType:''},
    { label: 'Phone',key:'phone',dataType:''},
    { label: 'Active',key:'active',dataType:''},
    { label: 'Action',key:'action',type:'Actions',dataType:''},
    // Add more columns as needed
  ];
  const [isAddFormModelOpen, setIsAddFormModelOpen] = useState(false);
  const [tableRecords, setTableRecords] = useState({
    tableHeaders:tableHeaders,
    tableRows:{
        data:[]
    },
});
  useEffect(()=>{
    const fetchUserList = async () => {
      try {
        const users = await UserService.fetchUserList();
        let tableData = [];
        for (const role in users) {
          tableData = [...tableData];
          let cells = [];
          users[role].map((user)=>{
            cells.push({
              isActive:false,
              firstName:user.name,
              lastName:user.name,
              dob:'02/11/1990',
              email:user.email,
              phone:'000-000-0000',
              active:'yes',
              action:[],
            })
            console.log('user',user);
          });
          tableData= [
            ...tableData,
            {isHeading: true, cells: [{isActive:false, 'role': role, colspan: (tableHeaders.length) }] },
            {
              cells: cells
            }
          ]
        }
        // console.log(JSON.stringify({...tableGrid,tableData:tableData}));
        setTableRecords({...tableRecords,tableRows:{type:'tHeading',data:tableData}});
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };
    const fetchRoles=async()=>{
      const rolesResponse = await RolesService.fetchRolesList();
      let roles=[];
      rolesResponse.map((itm)=>{
        let obj={label:itm.name,value:itm.name}
        roles.push(obj);
      });
      setRoles(roles);
    }   
    fetchUserList();
    fetchRoles();
 
  },[]);
  const addFormHandler = () => {
    setIsAddFormModelOpen(!isAddFormModelOpen);
  };
  const onChange = (e) => {
    console.log("onChange e");
  };
  const AddFormInputFields = [
    {
      fieldType: "SelectList",
      label: "Role",
      options: roles,
      placeholder: "",
      className: "form-control form-control-fields",
      name: "role",
      value: formData.role  ,
    },
    {
      fieldType: "TextInput",
      label: "Email",
      placeholder: "Email",
      className: "form-control form-control-fields",
      name: "email",
      value: formData.email,
    },
    {
      fieldType: "TextInput",
      label: "First Name",
      placeholder: "First Name",
      className: "form-control form-control-fields",
      name:"firstName",
      value: formData.firstName,
    },
    {
      fieldType: "TextInput",
      label: "Last Name",
      placeholder: "Last Name",
      className: "form-control form-control-fields",
      name:"lastName",
      value: formData.lastName,

    },
    {
      fieldType: "Phone",
      label: "Phone Number",
      placeholder: "Number",
      className: "form-control form-control-fields",
      name:"phone",
      value: formData.phone,
    },
    {
        fieldType: "Date",
        label: "Date of Birth",
        placeholder: "",
        className: "form-control form-control-fields",
        name:"dateofbirth",
        value: formData.dateofbirth,
      },
  ];
  const changeHandler = (val, e) => {
    let fieldName = e.target.name;
    console.log('changeHandler',val, fieldName);
    setFormData({
      ...formData,
      [fieldName]: val,
    });
  };
  const addFormSubmitHandler=() =>{
    console.log("FormData",formData);
    let dummyData=
    {
      "first_name": "dasdsad Raj",
      "last_name": "suyambu",
      "dob": "02/25/1989",
      "phone_number": null,
      "active_status": 1,
      "email": "thilakarrraj1.s@exsdsample.com"
       
  }
     UserService.saveUser(dummyData);
  }
  return (
    <>
      <div>
      <AddFormModal
        isOpen={isAddFormModelOpen}
        addFormHandler={addFormHandler}
        inputFields={AddFormInputFields}
        modelTitle={"Add User"}
        changeHandler={changeHandler}
        formSubmitHandler={addFormSubmitHandler}
      />
        <div className="row h-100">
          <div className="col-md-12 overflow-auto h-100">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group d-flex mb-0 justify-content-between">
                      <div className="form-group-fields row">
                        <div className="col-md-2 px-1">
                          <Selectlist
                            options={roles}
                            defaultValue=""
                            changeHandler={onChange}
                          />
                        </div>
                        <div className="col-md-2 px-1">
                          <input type="text" className="form-control" name="" />
                        </div>
                        <div className="col-md-2 px-1">
                          <input type="text" className="form-control" name="" />
                        </div>
                        <div className="col-md-2 px-2">
                          <input type="text" className="form-control" name="" />
                        </div>
                        <button className="btn btn-primary rounded-pill mr-2">
                          Search
                        </button>
                        <button className="btn btn-outline-secondary rounded-pill">
                          Clear
                        </button>
                      </div>
                      <div className="addAction">
                        <div className="btn-group">
                          <button
                            onClick={addFormHandler}
                            className="btn btn-primary"
                          >
                            Add
                          </button>
                          <button
                            className="btn btn-outline-secondary dropdown no-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <span className="dropdown-toggle">
                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </span>
                            <div
                              className="dropdown-menu dropdown-menu-right shadow"
                              aria-labelledby="userDropdown"
                            >
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Group Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Grid Edit
                              </a>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div className="datatable-container dataTable">
                <TableGrid {...tableRecords} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
