import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { isObject,isSet } from "../../utils/commonUtils";
import FormInputs from "../../components/UI/FormInputs";
// import { useLocation, useNavigate } from "react-router-dom";
import LabService from "../../services/LabService";
import { useToast } from '../../context/ToaxtContext';


const AddLab = (props) => {
  const { showToast } = useToast();
//   const navigate = useNavigate();
//   const location = useLocation();
  const [validation,setValidation] = useState({});

  const [formData,setFormData] = useState({
    name: '',
    description: '',
  })
  const { isOpen,addFormHandler, modelTitle } =props;
    const inputFields = [
        {
            type: "TextInput",
            label: "Lab",
            placeholder: "Lab Name",
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
    const payload = {
      name:formData.name,
      description:formData.description
    }
    let updateValidation = {...validation};
    try{
      const data = await LabService.saveLabs(payload);
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
        props.fetchLabsList();
        props.addFormHandler();
        showToast('success', 'Lab Added Successfully');
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
export default AddLab;