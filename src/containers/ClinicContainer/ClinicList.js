import React, { Component } from 'react';
import ClinicService from '../../services/ClinicService';
import TableGrid from '../../components/UI/TableGrid';
import AddClinic from './AddClinic';
import { ToastContext  } from "../../context/ToaxtContext";
import FormInputs from '../../components/UI/FormInputs';
import moment from 'moment';
import { capitalizeFirstLetter, isSet } from '../../utils/commonUtils';
import Buttons from '../../components/UI/Buttons';

// import { AddFormModal } from '../DashboardContainer/AddFormModal';


class ClinicList extends Component {
  static contextType = ToastContext;
  constructor(props) {
    super(props);
    // Initialize state or bind methods if needed
    const tableHeaders =  [
        { label: '',key:'isActive',type:'checkBox'},
        { label: 'Clinic',key:'clinic',type:'',inputType:'TextInput'},
        { label: 'Description',key:'description',inputType:'TextArea'},
        { label: 'Created At',key:'createdAt'},
        { label: 'Active',key:'active'},
        { label: 'Action',key:'action',type:'Actions'},
        // Add more columns as needed
      ];
    this.state = {
      filters:{
        clinic:''
      },
        tableRecords:{
            tableHeaders:tableHeaders,
            tableRows:{
                data:[]
            },
        },
        formDataInEdit:{},
        activeEditId:null,
      // Your state variables go here
      isModelOpen:false,
  }
}

  componentDidMount() {
    
    this.fetchClinicList();
    
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
  addFormHandler=()=>{
    this.setState({isModelOpen:!this.state.isModelOpen})
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
  render() {
    const {tableRecords,filters,isModelOpen} = this.state;
   
    return (
      <>
      {(isModelOpen)?
        <AddClinic
            modelTitle={"Add Clinic"}
            fetchClinicList={this.fetchClinicList}
            isOpen={this.state.isModelOpen}
            addFormHandler={this.addFormHandler}
        />
      :<></>}
      
      <div>
        <div className="row h-100">
          <div className="col-md-12 overflow-auto h-100">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group d-flex mb-0 justify-content-between">
                      <div className="form-group-fields row">
                      <div className="col-md-4 px-1">
                            <FormInputs 
                              placeholder="Clinic"
                              value={filters["name"]}
                              changeHandler={(val)=>this.onChangeFiltersHandler('name',val)}
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
                        <div className="btn-group">
                          <Buttons
                            clickHandler={this.addFormHandler}
                            className="btn btn-primary" 
                            acl={'clinic-create'}
                            label={'Add'}
                          />
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
                  <TableGrid 
                      {...tableRecords} gridEditProps={{
                        formDataInEdit:this.state.formDataInEdit,
                        activeEditId:this.state.activeEditId,
                        onChangeFormDataInEdit:this.onChangeFormDataInEdit,
                      }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  submitFiltersHandler = ()=>{
    const {filters}  =this.state;
    const {name} = filters;
    const queryfilters = {
      name:name,
    }
    this.fetchClinicList(queryfilters)
  }
  clearFiltersHandler = async ()=>{
    await this.setState({
      filters:{
        name:'',
      }
    });
    this.submitFiltersHandler();
  }
  fetchClinicList =async (query)=>{
    try{
       const clinicList =  await ClinicService.getClinicList(query);
        let tableData = [];
       clinicList.map((clinic,clinicIndex)=>{
        const usDateTimeString = moment.utc(clinic.created_at).format('MMMM D, YYYY h:mm:ss A');


        tableData = [
            ...tableData,
            {   
                clinicIndex:clinicIndex,
                isHeading:false,
                rowId:clinic.clinic_id,
                data:{
                    isActive:clinicIndex,
                    clinic:capitalizeFirstLetter(clinic.name),
                    description:capitalizeFirstLetter(clinic.description),
                    createdAt:usDateTimeString,//clinic.created_at,
                    active:'Yes',
                    action:[{
                      className:'btn btn-datatable btn-icon btn-transparent-dark',
                      iconType:'Edit',
                      title:'Edit',
                      type:'GridEdit',
                      acl:'clinic-edit',
                      clickHandler:(rowId,data)=>this.editHandler(rowId,data),
                      updateHandler:()=>this.updateHandler(clinic.clinic_id),
                      onChangeFormDataInEdit:(key,val)=>this.onChangeFormDataInEdit(key,val)
                    },{ 
                      className:'btn btn-datatable btn-icon btn-transparent-dark',
                      iconType:'Remove',
                      acl:'clinic-delete',
                      title:'Delete',
                      clickHandler:()=>this.deleteHandler(clinic.clinic_id),
                    }]
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
    }catch(e){

    }
  }
  deleteHandler = async (clinicId)=>{
    const { showToast } = this.context;
    const userConfirmed = window.confirm('Are you sure you want to delete?');
    if(userConfirmed){
        try{
            const data = await ClinicService.deleteClinic(clinicId);
          //   if(data.code!==200 && data.code!==201){
          //     showToast('error', isSet(data.data,'Something went wrong..'));
          //   }else{
              showToast('success', 'Clinic Removed successfully');
              this.fetchUserList();
          //   }
            console.log('userId',data);
          }catch(e){
      
          }
    }
    
  }
  editHandler = (rowId,data)=>{
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
  updateHandler = async (clinicId)=>{
    const {formDataInEdit} = this.state;
    console.log('formDataInEdit',formDataInEdit,clinicId);
    const {clinic,description} = formDataInEdit;
    let payload = {
      name:clinic,
      description:description
    }

    try{
      const data = await ClinicService.updateClinic(clinicId,payload);
      const { showToast } = this.context;
      
      if(data.code===500){
        showToast('error', isSet(data.data,'Something went wrong..'));
      }else{
        showToast('success', 'Clinic updated successfully');
        this.editHandler(null,{});
      }
      console.log('data',data);
      
    }catch(e){

    }
    this.fetchClinicList();
  }
}

export default ClinicList;