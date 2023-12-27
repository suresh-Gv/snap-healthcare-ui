import React from "react";
import Wrap from "../../../hoc/Wrap";
import TableData from "./TableData";

const TableHeader=(props)=>{
    return (
        <Wrap>
         <thead>
              <tr>
                {props.tableHead.map((item, itemIndex) => (
                    <TableData value={item.label} keyIndex={itemIndex} type={'THeader'} />
                ))}
              </tr>
            </thead>
        </Wrap>
    );
}

export default TableHeader;