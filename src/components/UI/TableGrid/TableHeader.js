import React from "react";


const TableHeader=(props)=>{
    return (
        <>
         <thead>
              <tr>
                
                {props.tableHead.map((item, itemIndex) => (
                  <th key={itemIndex}>
                    <a href="#" class="datatable-sorter">
                      {item.label}
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
        </>
    );
}

export default TableHeader;