import React from "react";
import {isSet,isObject} from '../../../../utils/commonUtils';
import THeader from './THeader';
import Actions from "./Action";
import Checkbox from "./Checkbox";
import FormInput from "./FormInput";

const TableData =(props)=>{
    const {Tag} = props;
    switch (isSet(props.type,'')) {
        case "THeader":
            return <THeader {...props} />;  
        case "Actions":
            return <Actions {...props}  />;
        case "checkBox":
            return <Checkbox {...props}/>;
        case "FormInput":
            return <FormInput {...props} />
        default:
            let disValue = props.value;
            let attrbs = {};
            if(isObject(props.value)){
                disValue = props.value.value;
                attrbs = isSet(props.value.attributes,{});
            }
            return <Tag key={"column"} title={isSet(disValue,'')} {...attrbs}>{isSet(disValue,'')}</Tag>
    }
}

TableData.defaultProps = {
    Tag:'td',
    attributes:{}
}
export default TableData;

