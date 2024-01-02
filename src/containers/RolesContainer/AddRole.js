import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { isObject,isSet } from "../../utils/commonUtils";
import FormInputs from "../../components/UI/FormInputs";
import { useLocation, useNavigate } from "react-router-dom";
import RolesService from "../../services/RoleService";
import { useToast } from '../../context/ToaxtContext';


const AddRole = (props) => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [validation,setValidation] = useState({});

  const [formData,setFormData] = useState({
    name: '',
    description: '',
  })
  const { isOpen, roles,addFormHandler, modelTitle } =props;
    const inputFields = [
        {
            type: "TextInput",
            label: "Role",
            placeholder: "Role",
            className: "form-control form-control-fields",
            name: "name",
            value:formData.name,
          },
          {
            type: "TextArea",
            label: "Description",
            placeholder: "Description",
            className: "form-control form-control-fields",
            name: "description",
            value:formData.description,
          }
      
    ];
    const changeHandler = (val, e) => {
      let fieldName = e.target.name;
      setFormData({
          ...formData,
          [fieldName]: val,
        });
    };
    const formSubmitHandler = async () => {
    console.log("FormData", formData);
    const payload = {
      name:formData.name
    }
    let updateValidation = {...validation};
    try{
      const data = await RolesService.saveRole(payload);
      // console.log('Roledata',data);
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
        // props.fetchUserList();
        // props.addFormHandler();
        navigate('permissions')
        showToast('success', 'Role Added Successfully');
      }
    }catch(e){

    }
      
      // const currentUrl = location.pathname;
    // console.log("current URL", currentUrl);
    
    }
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
          <div className="row">
            {inputFields &&
              inputFields.map((field, index) => (
                <div className="col-12" key={index}>
                  <div className="form-group">
                    <label className="text-gray-900 text-md"> {field.label} </label>
                    <FormInputs {...field} changeHandler={changeHandler} />
                    {isSet(validation[field.name],'')!=='' ? <span className="text-danger m-1">{isSet(validation[field.name],'')}</span> : ''}
                  </div>
                </div>
              ))}
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" className="rounded-pill" onClick={()=>formSubmitHandler()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddRole;