import React, { Component } from 'react';
// import {setAndGetAttributes} from './FormInputFunctions';

const TextInput = (props)=>{
    const {value,changeHandler} = props;

    const onChangeHandler = (e)=>{
        changeHandler(e.target.value);       
    } 
    return(
        <input 
          type="text"
          className={props.className?props.className:''}
          placeholder={props.placeholder?props.placeholder:''}
          style={props.style?props.style:''}
          onChange={e=>onChangeHandler(e)}
          value={value}
          />    
    )
}
TextInput.defaultProps = {
  isMandatory:false,
  className: 'form-control',
}

export default TextInput;



// import React, { Component } from 'react';
// // import {setAndGetAttributes} from './FormInputFunctions';

// const TextInput = (props)=>{
//     const {value,changeHandler} = props;

//     const onChangeHandler = (e)=>{
//         changeHandler(e.target.value,e);       
//     } 
//     return(
//         <input 
//           type="text"
//           {...attr}
//           onChange={e=>onChangeHandler(e)}
//           value={value} />    
//     )
// }
// TextInput.defaultProps = {
//   isMandatory:false,
//   className: 'form-control',
// }

// export default TextInput;