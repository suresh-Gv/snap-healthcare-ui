import React, { Component } from "react";
import { isSet,capitalizeFirstLetter } from "../../utils/commonUtils";
import FormInputs from "../../components/UI/FormInputs";
import TableGrid from "../../components/UI/TableGrid";
import UserAdd from './UserAdd';
import RolesService from "../../services/RoleService";
import UserService from "../../services/UserService";
import { ToastContext  } from "../../context/ToaxtContext";
import Buttons from "../../components/UI/Buttons";

class UserList extends Component {
  
  static contextType = ToastContext;
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      rolesForFilter:[],
      filters:{
        role:'',
        name:'',
        email:'',
        phone:'',
      },
      isAddFormModelOpen: false,
      tableRecords: {
        tableHeaders:[
          { label: '', key: 'isActive', type: 'checkBox'},
          { label: 'Role', key: 'role', type: ''},
          { label: 'First Name', key: 'firstName',inputType:'TextInput' },
          { label: 'Last Name', key: 'lastName',inputType:'TextInput' },
          { label: 'DOB', key: 'dob', inputType:'TextInput'},
          { label: 'Email', key: 'email',inputType:'TextInput'},
          { label: 'Phone', key: 'phone'},
          { label: 'Active', key: 'active', inputType: 'Checkbox' },
          { label: 'Action', key: 'action', type: 'Actions'},
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
  
  render() {
    const {roles,tableRecords,isAddFormModelOpen,rolesForFilter,filters} = this.state;
    return (
      <>
        <div>
          {(isAddFormModelOpen)? 
            <UserAdd
              isOpen={this.state.isAddFormModelOpen}
              addFormHandler={this.addFormHandler}
              roles={roles}
              fetchUserList={this.fetchUserList}
              modelTitle={"Add User"} />
          :<></>}
          
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
                            <FormInputs
                              type="SelectList"
                              options={rolesForFilter}
                              value={filters['role']}
                              changeHandler={(val)=>this.onChangeFiltersHandler('role',val)}
                            />
                          </div>
                          <div className="col-md-2 px-1">
                            <FormInputs 
                              type="TextInput"
                              placeholder="Name"
                              value={filters["name"]}
                              changeHandler={(val)=>this.onChangeFiltersHandler('name',val)}
                              className="form-control"/>
                          </div>
                          <div className="col-md-2 px-1">
                          <FormInputs 
                              type="TextInput"
                              placeholder="Email"
                              value={filters["email"]}
                              changeHandler={(val)=>this.onChangeFiltersHandler('email',val)}
                              className="form-control"/>
                          </div>
                          <div className="col-md-2 px-2">
                            <FormInputs 
                              type="TextInput"
                              // type='Phone'
                              placeholder="Phone"
                              value={filters["phone"]}
                              changeHandler={(val)=>this.onChangeFiltersHandler('phone',val)}
                              className="form-control"/>
                          </div>
                          <button className="btn btn-primary rounded-pill mr-2" onClick={()=>this.submitFiltersHandler()}>
                            Search
                          </button>
                          <button className="btn btn-outline-secondary rounded-pill" onClick={()=>this.clearFiltersHandler()}>
                            Clear
                          </button>
                        </div>

                        <div className="addAction">
                          <div className="btn-group ">
                          <Buttons
                            clickHandler={this.addFormHandler}
                            className="btn btn-primary" 
                            acl={'user-create'}
                            label={'Add'}
                          />
                                 
                                    
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
  editHandler = (rowId,data)=>{
    console.log('rowId,data',rowId,data);
    this.setState({
      activeEditId:rowId,
      formDataInEdit:data
    }); 
  }
  onChangeFiltersHandler =(key,val)=>{
    const {filters} = this.state;
    this.setState({
      filters:{
        ...filters,
        [key]:val
      }
    })
  }
  onChangeFormDataInEdit = (key,val)=>{
    this.setState({
      formDataInEdit:{
        ...this.state.formDataInEdit,
        [key]:val
      }
    })
  }
  updateHandler = async (userId)=>{
    const {formDataInEdit} = this.state;
    const {firstName,lastName,email,dob,active} = formDataInEdit;
    let payload = {
      first_name:firstName,
      last_name:lastName,
      email:email,
      dob:dob,
      active_status:(active === true || isSet(active,'').toString().toLowerCase() === 'yes')?true:false

    }

    try{
      const data = await UserService.updateUser(userId,payload);
      const { showToast } = this.context;
      
      if(data.code===500){
        showToast('error', isSet(data.data,'Something went wrong..'));
      }else{
        showToast('success', 'User updated successfully');
        this.editHandler(null,{});
      }
      console.log('data',data);
      
    }catch(e){

    }
    this.fetchUserList();
  }
  submitFiltersHandler = ()=>{
    const {filters}  =this.state;
    const {name,role,email,phone} = filters;
    const queryfilters = {
      user_name:name,
      role_name:role,
      email:email,
      phone:phone
    }
    this.fetchUserList(queryfilters)
  }
  clearFiltersHandler = async ()=>{
    await this.setState({
      filters:{
        name:'',
        role:'',
        email:'',
        phone:''
      }
    });
    this.submitFiltersHandler();
  }
  fetchUserList = async (query='') => {
    console.log('query',JSON.stringify(query));
    const {tableRecords} = this.state;
    try {
      const users = await UserService.getUserList(query);
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
                acl:'user-edit',
                clickHandler:(rowId,data)=>this.editHandler(rowId,data),
                updateHandler:()=>this.updateHandler(user.id),
                onChangeFormDataInEdit:(key,val)=>this.onChangeFormDataInEdit(key,val)
              },
              {
                className:'btn btn-datatable btn-icon btn-transparent-dark',
                iconType:'Remove',
                acl:'user-delete',
                clickHandler:()=>this.deleteHandler(user.id)
              }],
            }
            
          })
        });
        tableData = [
          ...tableData,
          { 
            isHeading: true, 
            rowId: role,
            data: 
                {   
                  isActive: false, 
                    'role': {
                      value:capitalizeFirstLetter(role.replace(/_/g, ' ')),
                      attributes:{colspan: (tableRecords.tableHeaders.length) 
                      }, 
                    
                    }
                }
          },
          ...cells
        ]
      }
      // console.log('tableData',tableData);
      this.setState({ tableRecords: { ...tableRecords, tableRows: { type: 'tHeading', data: tableData } } });
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  fetchRoles = async () => {
    const rolesResponse = await RolesService.getRolesList();
    let roles = [{
      label:'-Roles-',
      value:''
    }];
    let rolesForFilter = [{
      label:'-Roles-',
      value:''
    }];
    rolesResponse.map((itm) => {
      let obj = { label: itm.name.replace(/_/g, ' '), value: itm.id };
      roles.push(obj);

      let objName = { label: itm.name.replace(/_/g, ' '), value: itm.name };
      rolesForFilter.push(objName);
    });
    this.setState({ roles,rolesForFilter });
  }

  addFormHandler = () => {
    this.setState({ isAddFormModelOpen: !this.state.isAddFormModelOpen });
  };
  deleteHandler = async (userId)=>{
    const { showToast } = this.context;
    const userConfirmed = window.confirm('Are you sure you want to delete?');
    if(userConfirmed){
      try{
        const data = await UserService.deleteUser(userId);
        // if(data.code!==200 && data.code!==201){
        //   showToast('error', isSet(data.data,'Something went wrong..'));
        // }else{
          showToast('success', 'User Removed successfully');
          this.fetchUserList();
        // }
        // console.log('userId',data);
      }catch(e){
        this.fetchUserList();
      }
    }
    
  }
}

export default UserList;
