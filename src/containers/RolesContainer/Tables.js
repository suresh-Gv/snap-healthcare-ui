import FormInputs from "../../components/UI/FormInputs";
import { capitalizeFirstLetter } from "../../utils/commonUtils";
import { isSet } from "../../utils/commonUtils";

export const Tables = (props) => {
  const access = ['list','create','edit','delete'];
  return (
    <>
      <div className="card-body p-0">
        <div className="datatable-container dataTable">
          <table
            width="100%"
            cellspacing="0"
            className="table table-striped table-bordered mb-0"
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
              <tr className="Tdheading">
                <td colspan="9" className="pl-5">
                  <a
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#r1"
                    aria-expanded="false"
                    className="collapsed"
                  >
                    User & Roles
                  </a>
                </td>
              </tr>
              <tr id="r1" className="accordion-collapse collapse">
                <td colspan=""></td>
                <td colspan="2" className="p-0">
                  <table
                    width="100%"
                    cellspacing="0"
                    className="table table-striped mb-0"
                  >
                    <thead>
                      <tr>
                        {props.permisssionHeading.map((itm) => {
                          return <th>{itm.label}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {props.permissonBody.map((item,itemIndex)=>{
                        return(
                          <tr key={itemIndex}>
                            <td>{capitalizeFirstLetter(item.label)}</td>
                            {access.map((itm,itmIndex)=>{
                              const value = item.data[itm];
                              return(
                                <td key={`key${itmIndex}_${itemIndex}`}>
                                <div className="form-check">
                                    <FormInputs 
                                        className="form-check-input"
                                        id={`checkbox_${itmIndex}_${itemIndex}`}
                                        fieldType="Checkbox"
                                        name={item.label}
                                        value={(isSet(props.permissons,[]).indexOf(value)!==-1)?true:false}
                                        changeHandler={(bool)=>{
                                          if (bool===true) {
                                            // Add the value to the permissions array
                                            props.setPermissions([...props.permissons, value]);
                                          } else {
                                            // Remove the value from the permissions array
                                            props.setPermissions(props.permissons.filter((item) => item !== value));
                                          }
                                          }}/>
                                     
                                    </div>
                                  </td>
                              )
                            })}
                            
                          </tr>
                        )
                      })}
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
