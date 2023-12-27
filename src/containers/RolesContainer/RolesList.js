import React, { Component } from 'react';
import RolesService from '../../services/RoleService';
import TableGrid from '../../components/UI/TableGrid';


class RolesList extends Component {
  constructor(props) {
    super(props);
    // Initialize state or bind methods if needed
    const tableHeaders =  [
        { label: '',key:'isActive',type:'checkBox',inputType:'checkBox'},
        { label: 'Role',key:'role',type:''},
        { label: 'Description',key:'description',dataType:''},
        { label: 'Created At',key:'createdAt',dataType:''},
        { label: 'Active',key:'active',dataType:''},
        { label: 'Action',key:'action',type:'Actions',dataType:''},
        // Add more columns as needed
      ];
    this.state = {
        tableRecords:{
            tableHeaders:tableHeaders,
            tableRows:{
                data:[]
            },
        }
      // Your state variables go here
    };
  }

  componentDidMount() {
    
    this.fetchRolesList();
    
    // Code to run after the component has mounted
  }

  componentDidUpdate(prevProps, prevState) {
    // Code to run after the component has updated
  }

  componentWillUnmount() {
    // Code to run before the component is unmounted
  }

  handleEvent = () => {
    // Handler for events (e.g., button click)
  };

  render() {
    const {tableRecords} = this.state;
    return (
      <div>
        <div className="row h-100">
          <div className="col-md-12 overflow-auto h-100">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group d-flex mb-0 justify-content-between">
                      <div className="form-group-fields row">
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
                            // onClick={addFormHandler}
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
    );
  }
  fetchRolesList =async ()=>{
    try{
       const rolesList =  await RolesService.fetchRolesList();
        let tableData = [];
       rolesList.map((role,roleIndex)=>{
        // tableData = [
        //     ...tableData,
        //     {   
        //         roleIndex:roleIndex,
        //         cells:[{
        //             role:role.name,
        //             description:'',
        //             createdAt:role.created_at,
        //             active:'Yes',
        //             Actions:[]
        //         }]
        //     }
        // ]
        tableData = [
            ...tableData,
            {   
                roleIndex:roleIndex,
                isHeading:false,
                data:{
                    role:role.name,
                    description:'',
                    createdAt:role.created_at,
                    active:'Yes',
                    Actions:[]
                }
            }
        ]
       });
       this.setState({
        tableRecords:{
            ...this.state.tableRecords,
            tableRows:{
                type:'default',
                data:tableData
            }
        }
       })
       console.log('rolesList',tableData);
    }catch(e){

    }
  }
}

export default RolesList;