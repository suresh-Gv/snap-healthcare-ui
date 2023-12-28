// TableRow.js
import React from 'react';
import { isSet } from '../../../utils/commonUtils';
import TableData from './TableData';
import Wrap from '../../../hoc/Wrap';

const TableRow = ({ rowData, rowIndex, tableHeaders, gridEditProps }) => {
    const { rowId } = rowData;
    const {activeEditId} = gridEditProps;

    return (
        <tr key={rowIndex} className={rowData.isHeading ? 'Tdheading' : ''}>
            <Wrap>
                {tableHeaders.map((tHead, tHeadIndex) => {
                    if (!(tHead.key in rowData.data)) {
                        return null; // Skip rendering if the key doesn't exist in rowData.data
                    }
                    let formInputProps = {type:isSet(tHead.type,'')};
                    if(isSet(rowId,null)!==null && activeEditId===rowId && isSet(tHead.inputType,null)!==null){
                        formInputProps ={
                            type:'FormInput',
                            changeHandler:gridEditProps.onChangeFormDataInEdit
                        }
                    }
                    // console.log('formInputProps',formInputProps);
                    return (
                        <TableData
                            key={tHeadIndex}
                            value={rowData.data[tHead.key]}
                            {...tHead}
                            rowId={rowId}
                            thHeadKey={tHead.key}
                            {...formInputProps}
                            gridEditProps={{ ...gridEditProps, tableHeaders:tableHeaders,rowData:rowData }}
                        />
                    );
                })}
            </Wrap>
        </tr>
    );
};

TableRow.defaultProps = {
    gridEditProps:{
        activeEditId:null
    }
}
export default TableRow;
