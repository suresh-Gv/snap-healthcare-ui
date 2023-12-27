import React  from 'react';
import PropTypes from 'prop-types';

// import {setAndGetAttributes} from './FormInputFunctions';

const PickList = (props)=>{
  // Props Attr
   const {
    className,
    // placeholder,
    value,
    style,
    options,
    additionalAttrs 
  } = props;
  // Handler
   const {
    changeHandler
  } = props;

    const onChangeHandler = (e)=>{
      changeHandler(e.target.value,e);       
    } 
    return(
      <select
        className={className}
        value={value}
        {...style}
        {...additionalAttrs }
        onChange={(e) => onChangeHandler(e)} >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>   
    )
}

PickList.defaultProps = {
  isMandatory:false,
  className: 'form-control',
  placeholder:'',
  value:'',
  style:{},
  options:[],
  additionalAttrs :{},
  validation:{
    isValid:true,message:''
  },

}
PickList.propTypes = {
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

export default PickList;
