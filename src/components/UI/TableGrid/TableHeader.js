import React from "react";
import Wrap from "../../../hoc/Wrap";
import TableData from "./TableData";

const TableHeader=({tableHeaders})=>{
    return (
        <Wrap>
         <thead>
              <tr>
                {tableHeaders.map((item, itemIndex) => (
                    <TableData value={item.label} keyIndex={itemIndex} key={itemIndex} type={'THeader'} />
                ))}
              </tr>
            </thead>
        </Wrap>
    );
}

export default TableHeader;