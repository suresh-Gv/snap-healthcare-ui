import React from "react";
import { TableBody } from "./TableBody";
import {TableHeader} from "./TableHeader";

const Table = (props) => {
  console.log("Table", props);

  return (
    <>
      <div className="card-body">
        <div className="datatable-container dataTable">
          <table className="table" width="100%" cellSpacing="0" style={{ width: "100%" }}>
           <TableHeader {...props} />
            <TableBody {...props}/>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
