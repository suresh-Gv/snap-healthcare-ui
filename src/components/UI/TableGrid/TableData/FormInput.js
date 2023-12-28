import React from "react";
import Wrap from "../../../../hoc/Wrap";
import FormInputs from "../../FormInputs";
import { isObject,isSet } from "../../../../utils/commonUtils";

const FormInput = (props)=>{
    const {inputType,label,className,formDataInEdit,thHeadKey,changeHandler} = props;
    let disValue = '';
    try{
        disValue = formDataInEdit[thHeadKey];
        let attrbs = {};
        if(isObject(formDataInEdit[thHeadKey])){
            disValue = formDataInEdit[thHeadKey].value;
            attrbs = isSet(formDataInEdit[thHeadKey].attributes,{});
        }
    }catch(e){

    }
   
    return(
        <Wrap>
            <td>
            <FormInputs 
                fieldType={inputType}
                className={(inputType!=='Checkbox')?className:''}
                changeHandler={(val)=>changeHandler(thHeadKey,val)}
                placeholder={label}
                value={disValue} />
            </td>
        </Wrap>
    )
}
FormInput.defaultProps = {
    className:'form-control form-control-fields',
}
export default FormInput;