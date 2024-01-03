import React from "react";
import Wrap from "../../../../hoc/Wrap";
import FormInputs from "../../FormInputs";
import { isObject,isSet } from "../../../../utils/commonUtils";

const FormInput = (props)=>{
    const {inputType,label,className,thHeadKey,changeHandler,gridEditProps} = props;
    const {formDataInEdit} = gridEditProps;
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
   console.log('disValue',disValue,thHeadKey);
   const headerClassname = (inputType==='Checkbox')?'form-check':'';
   const HocWrap = (inputType==='Checkbox')?'div':Wrap;
    return(
        <Wrap>
            <td>
            <HocWrap className={headerClassname}>
            <FormInputs 
                type={inputType}
                name={thHeadKey}
                className={(inputType!=='Checkbox')?className:''}
                changeHandler={(val)=>changeHandler(thHeadKey,val)}
                placeholder={label}
                value={disValue} />
                </HocWrap>
            </td>
        </Wrap>
    )
}
FormInput.defaultProps = {
    className:'form-control form-control-fields',
}
export default FormInput;