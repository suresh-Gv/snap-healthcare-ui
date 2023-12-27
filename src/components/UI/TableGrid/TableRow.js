// TableRow.js
import React from 'react';
import TableData from './TableData';
import Wrap from '../../../hoc/Wrap';

const TableRow = ({ rowData,type,rowIndex,tableHeaders }) => {
  return (
    <tr key={rowIndex} className={rowData.isHeading ? 'Tdheading' : ''}>
        {(type=='tHeading')?
            <Wrap>
                {rowData.cells.map((cell,cellIndex)=>{
                    return tableHeaders.map((tHead)=>{
                        return(
                            <TableData key={cellIndex} value={cell[tHead.key]} {...tHead} />
                        )
                    })
                })}
            </Wrap>
        :<Wrap>
            {tableHeaders.map((tHead,tHeadIndex)=>{
            return(
                <TableData key={tHeadIndex} value={rowData.data[tHead.key]} {...tHead} />
            )
        })}
         </Wrap>
         }
       

        
  </tr>
  );
};
export default TableRow;



   