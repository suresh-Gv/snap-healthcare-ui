import { useEffect, useState } from "react";
import TableGrid from "../../components/UI/TableGrid";
import RolesService from "../../services/RoleService";
import { Tables } from "./Tables";

export const PermissionList = () => {
  const [roles, setRoles] = useState([]);
  const tableHeaders = [
    { label: "Screen", key: "Create", type: "", inputType: "TextInput" },
    { label: "Listing Item", key: "Listing", inputType: "TextInput" },
    { label: "Permission Access ", key: "Permission Access" },

    // Add more columns as needed
  ];
  console.log("localStorage:=>",localStorage.getItem('userProfile'));
  const permisssionHeading = [
    { label: "Screen" },
    { label: "Create" },
    { label: "Read" },
    { label: "Edit" },
    { label: "Delete" },
  ];
  const permisssionBody = [
    {
      "Test": [
        { Create: true },
        { Read: true },
        { Edit: true },
        { Delete: true },
      ],
    },
    {
      " Lab Assistant ": [
        { Create: false },
        { Read: true },
        { Edit: true },
        { Delete: false },
      ],
    },
  ];
  let dummyVal={
    "lab:Admiin":
    [
        {
          "Test": [
            { Create: true },
            { Read: true },
            { Edit: true },
            { Delete: true },
          ],
        },
        {
          " Lab Assistant ": [
            { Create: false },
            { Read: true },
            { Edit: true },
            { Delete: false },
          ],
        },
      ]
  };
  const [tableRecords, setTableRecords] = useState({
    tableHeaders: tableHeaders,
    tableRows: {
      type: "default",
      data: [],
    },
  });

  const fetchRoles = async () => {
    try {
      const rolesList = await RolesService.fetchRolesList();
      let fetchRoles = [];
    } catch (error) {
      console.error("Error fetching roles", error);
    }
  };
  useEffect(() => {
    fetchRoles();
  }, [roles, tableRecords]);
  console.log("State Roles", roles);
  return (
    <>
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-md-12 overflow-auto h-100">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group d-flex mb-0 justify-content-between align-items-center">
                      <div> Permission Control </div>
                      <div className="addAction">
                        <div className="btn-group ">
                          <button
                            className="btn btn-primary"
                            // data-bs-toggle="modal"
                            // data-bs-target="#addRoleModal"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Tables
                tableHeaders={tableHeaders}
                permisssionHeading={permisssionHeading}
                permisssionBody={permisssionBody}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};