// import React, { Component } from 'react';
// // import {setAndGetAttributes} from './FormInputFunctions';

// const Password = (props)=>{
//     const {value,changeHandler} = props;

//     const onChangeHandler = (e)=>{
//         changeHandler(e.target.value,e);       
//     } 
//     return(
//         <input 
//           type="password"
//           className={props.className?props.className:''}
//           placeholder={props.placeholder?props.placeholder:''}
//           onChange={e=>onChangeHandler(e)}
//           value={value}
//           />    
//     )
// }
// Password.defaultProps = {
//   isMandatory:false,
//   className: 'form-control',
// }

// export default Password;

import React  from 'react';
import PropTypes from 'prop-types';

// import {setAndGetAttributes} from './FormInputFunctions';

const TextInput = (props)=>{
  // Props Attr
   const {
    type,
    className,
    placeholder,
    value,
    style,
    name,
  } = props;
  // Handler
   const {
    changeHandler
  } = props;

    const onChangeHandler = (e)=>{
      changeHandler(e.target.value,e);       
    } 
    return(
        <input 
          type={'password'}
          className={className}
          name={name}
          placeholder={placeholder}
          value={value}
          {...style}
          onChange={(e)=>onChangeHandler(e)}    />    
    )
}
TextInput.defaultProps = {
  type:'text',
  isMandatory:false,
  className: 'form-control',
  placeholder:'',
  value:'',
  style:{},
  validation:{
    isValid:true,message:''
  },

}
TextInput.propTypes = {
  type: PropTypes.string,
  isMandatory: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
  // validationRules: PropTypes.array,
  // valid: PropTypes.bool,
  changeHandler: PropTypes.func.isRequired,
};

export default TextInput;
