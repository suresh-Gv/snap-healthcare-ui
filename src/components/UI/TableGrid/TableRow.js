// TableRow.js
import React from 'react';
import TableData from './TableData';

const TableRow = ({ rowData,rowIndex,tableHead }) => {
  return (
    <tr key={rowIndex} className={rowData.isHeading ? 'Tdheading' : ''}>
        {rowData.cells.map((cell,cellIndex)=>{
            return tableHead.map((tHead)=>{
                return(
                    <TableData key={cellIndex} value={cell[tHead.key]} {...tHead} />
                )
            })
        })}
  </tr>
  );
};
export default TableRow;



   