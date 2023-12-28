// TableRow.js
import React from 'react';
import { isSet } from '../../../utils/commonUtils';
import TableData from './TableData';
import Wrap from '../../../hoc/Wrap';

const TableRow = ({ rowData,rowIndex,tableHeaders,gridEditProps}) => {
    // const {activeEditId} = gridEditProps;
    const {rowId} = rowData;
    const activeEditId = null;
    const editGridHandler = ()=>{
        let formDatas = {};
                tableHeaders.map((tHead)=>{
                    formDatas = {
                        ...formDatas,
                        [tHead.key]:rowData.data[tHead.key]
                    }
                });
        // setFormDataInEdit(formDatas);
    }
  return (
    <tr key={rowIndex} className={rowData.isHeading ? 'Tdheading' : ''}>
        <Wrap>
            {tableHeaders.map((tHead,tHeadIndex)=>{
                if (!rowData.data.hasOwnProperty(tHead.key)) {
                    return false;
                }
                let formInputProps = {type:isSet(tHead.type,'')};
                if(isSet(rowId,null)!==null && activeEditId===rowId && isSet(tHead.inputType,null)!==null){
                    formInputProps ={
                        type:'FormInput',
                        changeHandler:gridEditProps.onChangeFormDataInEdit
                    }
                }
            return(
                <TableData 
                    key={tHeadIndex} 
                    value={rowData.data[tHead.key]} 
                    {...tHead} 
                    rowId={rowId}
                    thHeadKey={tHead.key}
                    {...formInputProps}
                    gridEditProps={{...gridEditProps,editGridHandler:editGridHandler}}
                />
            )
        })}
         </Wrap>
        
  </tr>
  );
};
export default TableRow;



   