// TableBody.js
import React from 'react';
import { isSet } from '../../../utils/commonUtils';
import TableRow from './TableRow';

const TableBody = ({ tableRows,tableHeaders,gridEditProps}) => {
  return (
    <tbody>
      {isSet(tableRows.data,[]).length===0?
      <tr><td colSpan={tableHeaders.length} align='center'>No Record exists</td></tr>:
      isSet(tableRows.data,[]).map((rowData, index) => (
        <TableRow 
          key={index} 
          rowIndex={index} 
          tableHeaders={tableHeaders} 
          type={tableRows.type} 
          rowData={rowData} 
          gridEditProps={gridEditProps} />
      ))}
      
    </tbody>
  );
};

export default TableBody;
