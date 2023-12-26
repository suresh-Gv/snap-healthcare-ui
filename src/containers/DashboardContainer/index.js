import React, { useState } from "react";
import { Picklist } from "../../components/UI/FormInputs/Picklist";
// import { useNavigate } from 'react-router-dom';
// import AuthService from "../../services/AuthService";
// import {RichText} from "../../components/UI/FormInputs/RichTextEditor"
import { AddFormModal } from "./AddFormModal";
import Table from "./Table";
import simplify from "semver/ranges/simplify";

const DashboardContainer = () => {
  const [isAddFormModelOpen, setIsAddFormModelOpen] = useState(false);
  const addFormHandler = () => {
    setIsAddFormModelOpen(!isAddFormModelOpen);
  };
  const RolePicklistOptions = [
    { label: "- Role -", value: "" },
    { label: "Admin", value: "Admin" },
    { label: "Billing Admin", value: "Billing Admin" },
    { label: "Billing Clinic Admin", value: "Billing Clinic Admin" },
    { label: "Clinic", value: "Clinic" },
    { label: "Company", value: "Company" },
    { label: "Employee", value: "Employee" },
    { label: "Lab Admin", value: "Lab Admin" },
  ];
  const onChange = (e) => {
    console.log("onChange e");
  };
  const AddFormInputFields = [
    {
      fieldType: "Picklist",
      label: "Role",
      options: [
        { label: "Admin", value: "Admin" },
        { label: "Admin", value: "Admin" },
        { label: "Admin", value: "Admin" },
        { label: "Admin", value: "Admin" },
        { label: "Admin", value: "Admin" },
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

  const tableHeaders = [
    "Role",
    "FirstName",
    "LastName",
    "DOB",
    "Email",
    "Phone",
    "Active",
    "Actions",
  ];
  const tableBody = [
    {
      role: "Sys Admin",
      data: [
        [
          "",
          "Billing",
          "Admin",
          "10/10/1990",
          "billing.adm@mailinator.com",
          "000-000-0000",
          "Yes",
        ],
        [
          "",
          "Qa g",
          "Bill Admin",
          "11/11/2000",
          "qabill1@mailinator.com",
          "111-111-1111",
          "Yes",
        ],
      ],
    },
    {
      role: "Billing Clinic Admin",
      data: [
        [
          "",
          "Clinic",
          "Bill Admin",
          "10/10/1990",
          "qabill1@mailinator.com",
          "000-111-0000",
          "No",
        ],
        [
          "",
          "Bill Admin",
          "Admin",
          "10/10/1990",
          "billing.clinic.adm@mailinator.com",
          "000-111-0000",
          "Yes",
        ],
        [
          "",
          "Clinic",
          "Bill Admin",
          "10/10/1990",
          "qabill1@mailinator.com",
          "000-111-0000",
          "Yes",
        ],
      ],
    },
    // Add more role entries as needed
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
                          <Picklist
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
            
          
              <Table tableHeaders={tableHeaders} tableBody={tableBody} />
            </div>
          </div>
        </div>
    </>
  );
};

export default DashboardContainer;
