import React, { Component } from 'react';
// import {setAndGetAttributes} from './FormInputFunctions';

const Password = (props)=>{
    const {value,changeHandler} = props;

    const onChangeHandler = (e)=>{
        changeHandler(e.target.value);       
    } 
    return(
        <input 
          type="password"
          className={props.className?props.className:''}
          placeholder={props.placeholder?props.placeholder:''}
          onChange={e=>onChangeHandler(e)}
          value={value}
          />    
    )
}
Password.defaultProps = {
  isMandatory:false,
  className: 'form-control',
}

export default Password;