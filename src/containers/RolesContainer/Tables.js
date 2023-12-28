export const Tables = (props) => {
  console.log("Tables", props.permisssionBody);
  return (
    <>
      <div class="card-body p-0">
        <div class="datatable-container dataTable">
          <table
            width="100%"
            cellspacing="0"
            class="table table-striped table-bordered mb-0"
          >
            <thead>
              <tr>
                {props.tableHeaders.map((header, index) => (
                  <th key={index}>
                    <a href="#" className="datatable-sorter">
                      {header.label}
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr class="Tdheading">
                <td colspan="9" class="pl-5">
                  <a
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#r1"
                    aria-expanded="false"
                    class="collapsed"
                  >
                    labAdmin
                  </a>
                </td>
              </tr>
              <tr id="r1" class="accordion-collapse collapse">
                <td colspan=""></td>
                <td colspan="2" class="p-0">
                  <table
                    width="100%"
                    cellspacing="0"
                    class="table table-striped mb-0"
                  >
                    <thead>
                      <tr>
                        {props.permisssionHeading.map((itm) => {
                          return <th>{itm.label}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {props.permisssionBody.map((itm, index) => (
                        <tr key={index}>
                          <td>{Object.keys(itm)}</td>
                          {Object.values(itm).map((permissions, innerIndex) =>
                            permissions.map((permission, nestedIndex) => (
                              <td key={nestedIndex}>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id={`checkAccountChanges_${index}_${nestedIndex}`}
                                    type="checkbox"
                                    checked={Object.values(permission)[0]}
                                  />
                                </div>
                              </td>
                            ))
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
