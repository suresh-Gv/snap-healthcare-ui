import React from "react";
import {isSet} from '../../../../utils/commonUtils';
import THeader from './THeader';
import Actions from "./Action";

const TableData =(props)=>{
    const {Tag} = props;
    switch (isSet(props.type,'')) {
        case "THeader":
            return <THeader {...props} />;  
        case "Actions":
            return <Actions {...props}  />;
        default:
            return <Tag key={"column"} title={isSet(props.value,'')}>{isSet(props.value,'')}</Tag>
    }
}

TableData.defaultProps = {
    Tag:'td'
}
export default TableData;

