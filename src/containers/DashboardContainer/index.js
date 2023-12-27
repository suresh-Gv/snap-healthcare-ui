import React, { useEffect, useState } from "react";
import Selectlist  from "../../components/UI/FormInputs/SelectList";
// import { useNavigate } from 'react-router-dom';
import UserService from "../../services/UserService";
import { AddFormModal } from "./AddFormModal";
import TableGrid from "../../components/UI/TableGrid";

const DashboardContainer = () => {
  const [isAddFormModelOpen, setIsAddFormModelOpen] = useState(false);
  const addFormHandler = () => {
    setIsAddFormModelOpen(!isAddFormModelOpen);
  };
  useEffect(()=>{
     UserService.fetchUserList();
  },[])
  const RolePicklistOptions = [
    { label: "- Role -", value: "" },
    { label: "Admin", value: "Admin" },
    { label: "Billing Admin", value: "Billing Admin" }
  ];
  const onChange = (e) => {
    console.log("onChange e");
  };
  const AddFormInputFields = [
    {
      fieldType: "SelectList",
      label: "Role",
      options: [
        { label: "Admin", value: "Admin" },
        { label: "Admin", value: "Admin" },
      ],
      placeholder: "",
      className: "form-control form-control-fields",
    },
    {
      fieldType: "TextInput",
      label: "Email",
      placeholder: "Email",
      className: "form-control form-control-fields",
    },
    {
      fieldType: "TextInput",
      label: "First Name",
      placeholder: "First Name",
      className: "form-control form-control-fields",
    },
    {
      fieldType: "TextInput",
      label: "Last Name",
      placeholder: "Last Name",
      className: "form-control form-control-fields",
    },
    {
      fieldType: "Picklist",
      options: [{ label: "Admin", value: "Admin" }],
      label: " Company",
      placeholder: "",
      className: "form-control form-control-fields",
    },
  ];

  const tableHeaders =  [
    { label: 'Role',key:'role',  },
    { label: 'Role',key:'role',  },
    // Add more columns as needed
  ];
  const data = [
    // { isHeading: true, cells: [{ name: 'Sys Admin', colspan: 8 }] },
    // { cells: [{ name: '', colspan: tableHeaders.length }] }, // Empty row without heading
    { cells: [{ name: 'Billing', colspan: 1 }, { name: 'Admin', colspan: 1 }, /* Add more cells with keys */] },
    { cells: [{ name: 'Qa g', colspan: 1 }, { name: 'Bill Admin', colspan: 1 }, /* Add more cells with keys */] },
    // { isHeading: true, cells: [{ name: 'Billing Clinic Admin', colspan:  tableHeaders.length }] },
    { cells: [{ name: 'Billing', colspan: 1 }, { name: 'Admin', colspan: 1 }, /* Add more cells with keys */] },
    // { cells: [{ name: '', colspan:  tableHeaders.length }] }, // Empty row without heading
    { cells: [{ name: 'Clinic', colspan: 1 }, { name: '', colspan:  tableHeaders.length }] },
    // Add more rows as needed
  ];
  

  return (
    <>
      <AddFormModal
        isOpen={isAddFormModelOpen}
        addFormHandler={addFormHandler}
        inputFields={AddFormInputFields}
        modelTitle={"Add User"}
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
                            options={RolePicklistOptions}
                            defaultValue=""
                            onChange={onChange}
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
            
          
              <TableGrid tableHead={tableHeaders} data={data} />
            </div>
          </div>
        </div>
    </>
  );
};

export default DashboardContainer;
