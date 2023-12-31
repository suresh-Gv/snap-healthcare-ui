import React from "react";
import TableHeader from "./TableHeader";
import TableBody  from "./TableBody";

const TableGrid  = (props)=>{
    return(
        <table className="table table-bordered" width="100%" cellSpacing="0" style={{ width: "100%" }}>
           <TableHeader {...props} />
           <TableBody {...props}/>
        </table>
    )
}

TableGrid.defaultProps = {
    className:'table',
    width:'100%',
    style:{},
    additionalAttr:{}
}

export default TableGrid;