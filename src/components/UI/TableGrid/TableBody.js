// TableBody.js
import React from 'react';
import { isSet } from '../../../utils/commonUtils';
import TableRow from './TableRow';

const TableBody = ({ tableRows,tableHeaders }) => {
  // console.log('tableRows',tableRows);
  return (
    <tbody>
      {isSet(tableRows.data,[]).map((rowData, index) => (
        <TableRow key={index} rowIndex={index} tableHeaders={tableHeaders} type={tableRows.type} rowData={rowData} />
      ))}
    </tbody>
  );
};

export default TableBody;
