import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FormInputs from "../../components/UI/FormInputs";
import UserService from "../../services/UserService";
import { isObject, isSet } from "../../utils/commonUtils";
import { useToast } from '../../context/ToaxtContext';
const AddFormModal = (props) => {
  const { showToast } = useToast();
  const [validation,setValidation] = useState({});
  const [formData,setFormData] = useState({
    assigned_role: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    dob: '12/03/1990',
  })
  const { isOpen, roles,addFormHandler, modelTitle } =props;
    const inputFields = [
      {
        type: "SelectList",
        label: "Role",
        options: roles,
        placeholder: "",
        // required:true,
        className: "form-control form-control-fields",
        name: "assigned_role",
        value: formData.assigned_role  ,
      },
      {
        type: "TextInput",
        label: "Email",
        placeholder: "Email",
        className: "form-control form-control-fields",
        name: "email",
        required:true,
        value: formData.email,
      },
      {
        type: "TextInput",
        label: "First Name",
        required:true,
        placeholder: "First Name",
        className: "form-control form-control-fields",
        name:"first_name",
        value: formData.first_name,
      },
      {
        type: "TextInput",
        label: "Last Name",
        placeholder: "Last Name",
        className: "form-control form-control-fields",
        name:"last_name",
        value: formData.last_name,
  
      },
      {
        type: "Phone",
        label: "Phone Number",
        placeholder: "Number",
        className: "form-control form-control-fields",
        name:"phone_number",
        value: formData.phone_number,
      },
      {
        type: "Date",
          label: "Date of Birth",
          placeholder: "",
          className: "form-control form-control-fields",
          name:"dob",
          value: formData.dob,
        },
    ];
    const changeHandler = (val, fieldName) => {
      let updateValidation = {...validation};
      if(isSet(validation[fieldName],'')!==''){
        setValidation({
          ...updateValidation,
          [fieldName]:''
        });
      }
      
      setFormData({
          ...formData,
          [fieldName]: val,
        });
    };
    const formSubmitHandler = async () => {
      let updateValidation = {...validation};
      try{
        const data  = await UserService.saveUser(formData);
        if(data.status && data.status=="ERROR"){
          if(isObject(data.data)){
            for (let key in data.data) {
              updateValidation = {
                ...updateValidation,
                [key]:data.data[key].join(',')
              }
            }
          }else{
            showToast('error', data.data);
          }
          
         
          if(Object.keys(updateValidation).length>0){
            setValidation(updateValidation);
          }
        }else{
          props.fetchUserList();
          props.addFormHandler();
          showToast('success', 'User Added Successfully');
        }
        console.log('data',data);
      }catch(e){

      }
      
    }
    // console.log('validation',validation);
  return (
    <>
      <Modal show={isOpen} onHide={addFormHandler}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6 className="modal-title text-gray-900">
              {modelTitle}
            </h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            {inputFields &&
              inputFields.map((field, index) => {
                const className = (isSet(field.required==true) && Object.keys(validation).length>0)?'was-validated':'';
                
                return(
                  <div className={`col-12 ${className}`} key={index}>
                    <div className="form-group">
                      <label className="text-gray-900 text-md"> {field.label} </label>
                      <FormInputs {...field} changeHandler={(val)=>changeHandler(val,field.name)} />
                      {isSet(validation[field.name],'')!=='' ? <span className="text-danger m-1">{isSet(validation[field.name],'')}</span> : ''}
                    </div>
                  </div>
                )
              })}
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center">
          <button className="btn btn-primary rounded-pill" onClick={()=>formSubmitHandler()}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddFormModal;