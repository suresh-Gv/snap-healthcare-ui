import React from "react";
import Icons from "../../components/UI/Icons";
export const TableBody = (props) => {
  return (
    <>
      <tbody>
        {props.tableBody.map((item, itemIndex) => (
          <React.Fragment key={itemIndex}>
            {/* Row with Role */}
            <tr className="Tdheading">
              <td style={{ width: "5%" }}>
                <input type="checkbox" name="" />
              </td>
              <td colSpan={props.tableHeaders.length - 1} className="">
                {item.role}
              </td>
            </tr>

            {/* Rows with Data */}
            {item.data.map((rowData, rowIndex) => (
              <tr key={rowIndex} data-index={rowIndex}>
                <td style={{ width: "5%" }}>
                  <input type="checkbox" name="" />
                </td>
                {rowData.map((cellData, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={{ width: cellIndex === 0 ? "5%" : "20%" }}
                  >
                    {cellData}
                  </td>
                ))}
                <td>
                  <button className="btn btn-datatable btn-icon btn-transparent-dark">
                    <Icons type="Edit" />
                  </button>
                  <button className="btn btn-datatable btn-icon btn-transparent-dark">
                    <Icons type="Remove" />
                  </button>
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </>
  );
};
