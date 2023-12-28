import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormInputs from "../../components/UI/FormInputs";
import UserService from "../../services/UserService";

const AddFormModal = (props) => {
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
        fieldType: "SelectList",
        label: "Role",
        options: roles,
        placeholder: "",
        className: "form-control form-control-fields",
        name: "assigned_role",
        value: formData.assigned_role  ,
      },
      {
        fieldType: "TextInput",
        label: "Email",
        placeholder: "Email",
        className: "form-control form-control-fields",
        name: "email",
        value: formData.email,
      },
      {
        fieldType: "TextInput",
        label: "First Name",
        placeholder: "First Name",
        className: "form-control form-control-fields",
        name:"first_name",
        value: formData.first_name,
      },
      {
        fieldType: "TextInput",
        label: "Last Name",
        placeholder: "Last Name",
        className: "form-control form-control-fields",
        name:"last_name",
        value: formData.last_name,
  
      },
      {
        fieldType: "Phone",
        label: "Phone Number",
        placeholder: "Number",
        className: "form-control form-control-fields",
        name:"phone_number",
        value: formData.phone_number,
      },
      {
          fieldType: "Date",
          label: "Date of Birth",
          placeholder: "",
          className: "form-control form-control-fields",
          name:"dob",
          value: formData.dob,
        },
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
      // let dummyData = {
      //   "first_name": "dasdsad Raj",
      //   "last_name": "suyambu",
      //   "dob": "02/25/1989",
      //   "phone_number": null,
      //   "active_status": 1,
      //   "email": "thilakarrraj1.s@exsdsample.com"
      // }
      UserService.saveUser(formData);
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
export default AddFormModal;