import React from "react";

export const Picklist = (props) => {
  const {className,changeHandler,defaultValue,options} = props;
  return (
    <select className={className?className:"form-control"} onChange={changeHandler} defaultValue={defaultValue}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};