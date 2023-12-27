import React from "react";
import Wrap from "../../../../hoc/Wrap";
import Icons from '../../Icons';

const Actions = (props)=>{

    return(
        <td>
            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                     <Icons type="Edit" />
                   </button>
                   <button className="btn btn-datatable btn-icon btn-transparent-dark">
                     <Icons type="Remove" />
                   </button>
        </td>
    )
}

export default Actions;