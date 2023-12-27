import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Inputs } from "../../components/UI/FormInputs";

export const AddFormModal = (props) => {
  const { isOpen, addFormHandler, inputFields, modelTitle, changeHandler } =
    props;

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
                <div class="col-12">
                  <div class="form-group">
                    <label class="text-gray-900 text-md"> {field.label} </label>
                    {/* <input type="text" class="form-control form-control-fields" id="exampleFirstName" placeholder="First Name"/> */}
                    <Inputs {...field} changeHandler={changeHandler} />
                  </div>
                </div>
              ))}
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" className="rounded-pill" onClick={()=>props.formSubmitHandler()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
