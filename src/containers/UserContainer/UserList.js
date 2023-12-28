import React, { Component } from "react";
import { isSet } from "../../utils/commonUtils";
import Selectlist from "../../components/UI/FormInputs/SelectList";
import TableGrid from "../../components/UI/TableGrid";
import UserAdd from './UserAdd';
// import { AddFormModal } from "../DashboardContainer/AddFormModal";
import RolesService from "../../services/RoleService";
import UserService from "../../services/UserService";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      isAddFormModelOpen: false,
      tableRecords: {
        tableHeaders:[
          { label: '', key: 'isActive', type: 'checkBox', inputType: 'Checkbox' },
          { label: 'Role', key: 'role', type: ''},
          { label: 'First Name', key: 'firstName',inputType:'TextInput' },
          { label: 'Last Name', key: 'lastName',inputType:'TextInput' },
          { label: 'DOB', key: 'dob', inputType:'TextInput'},
          { label: 'Email', key: 'email',inputType:'TextInput'},
          { label: 'Phone', key: 'phone'},
          { label: 'Active', key: 'active', inputType: 'Checkbox' },
          { label: 'Action', key: 'action', type: 'Actions', dataType: '' },
        ],
        tableRows: {
          data: []
        },
      },
      formDataInEdit:{},
      activeEditId:null,
    };
  }

  componentDidMount() {
    this.fetchUserList();
    this.fetchRoles();
  }
  onChange = (e) => {
    console.log("onChange e");
  };
  editHandler = (rowId)=>{
    this.setState({
      activeEditId:rowId});
    
  }
  setFormDataInEdit = (data)=>{
    this.setState({formDataInEdit:data});
  }
  onChangeFormDataInEdit = (key,val)=>{
    this.setState({
      formDataInEdit:{
        ...this.state.formDataInEdit,
        [key]:val
      }
    })
  }
  updateHandler = ()=>{
    const {formDataInEdit} = this.state;
    console.log('formDataInEdit',formDataInEdit);
  }
  render() {
    const {roles,tableRecords} = this.state;
    return (
      <>
        <div>
          <UserAdd
            isOpen={this.state.isAddFormModelOpen}
            addFormHandler={this.addFormHandler}
            roles={roles}
            modelTitle={"Add User"} />
          <div className="row h-100">
            <div className="col-md-12 overflow-auto h-100">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group d-flex mb-0 justify-content-between">
                        {/* ... your form fields */}
                        <div className="form-group-fields row">
                          <div className="col-md-2 px-1">
                            <Selectlist
                              options={roles}
                              defaultValue=""
                              changeHandler={this.onChange}
                            />
                          </div>
                          <div className="col-md-2 px-1">
                            <input type="text" className="form-control" name="" placeholder="Name" />
                          </div>
                          <div className="col-md-2 px-1">
                            <input type="text" className="form-control" name="" placeholder="Email"/>
                          </div>
                          <div className="col-md-2 px-2">
                            <input type="text" className="form-control" name=""  placeholder="Phone"/>
                          </div>
                          <button className="btn btn-primary rounded-pill mr-2">
                            Search
                          </button>
                          <button className="btn btn-outline-secondary rounded-pill">
                            Clear
                          </button>
                        </div>

                        <div className="addAction">
                          <div className="btn-group ">
                                  <button className="btn btn-primary" data-bs-toggle="modal"  onClick={this.addFormHandler} data-bs-target="#exampleModal"> Add </button>
                                    
                                  <button className="btn btn-outline-secondary dropdown no-arrow" data-bs-toggle="dropdown"> 
                                    <span className=" dropdown-toggle ">
                                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>  
                                    </span>
                                    <div className="dropdown-menu dropdown-menu-right shadow " aria-labelledby="userDropdown">
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
                    <TableGrid 
                      {...tableRecords} 
                      gridEditProps={{
                        formDataInEdit:this.state.formDataInEdit,
                        activeEditId:this.state.activeEditId,
                        onChangeFormDataInEdit:this.onChangeFormDataInEdit,
                        setFormDataInEdit:this.setFormDataInEdit,
                      }}
                       />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  fetchUserList = async () => {
    const {tableRecords} = this.state;
    try {
      const users = await UserService.fetchUserList();
      let tableData = [];
      for (const role in users) {
        tableData = [...tableData];
        let cells = [];
        // console.log('roless',role);
        users[isSet(role,'others')].map((user) => {
          cells.push({
            rowId:user.id,
            data:{
              role:'',
              isActive: false,
              firstName: user.first_name,
              lastName: user.last_name,
              dob: user.dob,
              email: user.email,
              phone: isSet(user.phone_number,'000-000-0000'),
              active: (user.active_status==true)?'Yes':'No',
              action: [{
                className:'btn btn-datatable btn-icon btn-transparent-dark',
                iconType:'Edit',
                type:'GridEdit',
                clickHandler:this.editHandler,
                setFormDataInEdit:(data)=>this.setFormDataInEdit(data),
                updateHandler:()=>this.updateHandler(),
                onChangeFormDataInEdit:(key,val)=>this.onChangeFormDataInEdit(key,val)
              },
              {
                className:'btn btn-datatable btn-icon btn-transparent-dark',
                iconType:'Remove',
                clickHandler:()=>{}
              }],
            }
            
          })
        });
        tableData = [
          ...tableData,
          { 
            isHeading: true, 
            rowId:role,
            data: 
                {   
                  isActive: false, 
                    'role': {
                      value:role.replace(/_/g, ' '),
                      attributes:{colspan: (tableRecords.tableHeaders.length) 
                      }, 
                    
                    }
                }
          },
          ...cells
        ]
      }
      console.log('tableData',tableData);
      this.setState({ tableRecords: { ...tableRecords, tableRows: { type: 'tHeading', data: tableData } } });
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  fetchRoles = async () => {
    const rolesResponse = await RolesService.fetchRolesList();
    let roles = [{
      label:'-Roles-',
      value:''
    }];
    rolesResponse.map((itm) => {
      let obj = { label: itm.name.replace(/_/g, ' '), value: itm.id }
      roles.push(obj);
    });
    this.setState({ roles });
  }

  addFormHandler = () => {
    this.setState({ isAddFormModelOpen: !this.state.isAddFormModelOpen });
  };
}

export default UserList;
