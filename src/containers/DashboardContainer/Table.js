import React from "react";
import { TableBody } from "./TableBody";
import {TableHeader} from "./TableHeader";

const Table = (props) => {
  console.log("Table", props);

  return (
    <>
      <div class="card-body">
        <div class="datatable-container dataTable">
          <table class="table" width="100%" cellspacing="0" style={{ width: "100%" }}>
           <TableHeader {...props} />
            <TableBody {...props}/>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
