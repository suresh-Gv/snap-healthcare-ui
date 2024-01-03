import React from "react";
import CheckboxInput from "../../FormInputs/Checkbox";

const Checkbox = ()=>{
    return(
        <td>
            <div className="form-check">
                <CheckboxInput changeHandler={()=>{}}/>
            </div>
        </td>
    )
}

export default Checkbox;