import React from "react";

const Header = (props)=>{
    const {className,keyIndex} = props;
    return(
        <th >
            <a href="#" key={keyIndex} className={className}>{props.value}</a>
        </th>
    )
}
Header.defaultProps = {
    className:"datatable-sorter"
}
export default Header;