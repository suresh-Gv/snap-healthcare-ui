import React from "react";
import TableHeader from "./TableHeader";
import TableBody  from "./TableBody";

const TableGrid  = (props)=>{
    return(
        <table className="table" width="100%" cellspacing="0" style={{ width: "100%" }}>
           <TableHeader {...props} />
           <TableBody {...props}/>
        </table>
    )
}

export default TableGrid;