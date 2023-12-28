import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormInputs from "../../components/UI/FormInputs";
import UserService from "../../services/UserService";

const AddRole = (props) => {
  const [formData,setFormData] = useState({
    role: '',
    description: '',
  })
  const { isOpen, roles,addFormHandler, modelTitle } =props;
    const inputFields = [
        {
            fieldType: "TextInput",
            label: "Role",
            placeholder: "Role",
            className: "form-control form-control-fields",
            name: "role",
            value:formData.role,
          },
          {
            fieldType: "TextArea",
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
    const formSubmitHandler = () => {
      console.log("FormData", formData);
    //   UserService.saveUser(formData);
    }
  return (
    <>
      <Modal show={isOpen} onHide={addFormHandler}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title text-gray-900" id="exampleModalLabel">
              {modelTitle}
            </h5>
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