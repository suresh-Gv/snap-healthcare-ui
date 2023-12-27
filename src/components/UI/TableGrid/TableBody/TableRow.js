// TableRow.js
import React from 'react';

const TableRow = ({ rowData,rowIndex }) => {
  return (
    <tr key={rowIndex} className={rowData.isHeading ? 'Tdheading' : ''}>
    {rowData.cells.map((cell, cellIndex) => (
      <td key={cellIndex}  colspan={cell.colspan}>
        {cell.name}
      </td>
    ))}
  </tr>
  );
};
//style={{ width: `${(cell.colspan / 9) * 100}%` }}
export default TableRow;



   