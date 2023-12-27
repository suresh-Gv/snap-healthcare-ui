// TableBody.js
import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data,tableHead }) => {
  return (
    <tbody>
      {data.map((rowData, index) => (
        <TableRow key={index} rowIndex={index} tableHead={tableHead} rowData={rowData} />
      ))}
    </tbody>
  );
};

export default TableBody;
