import React from 'react';

export const DatePicker = (props) => {
  const { className, value, changeHandler, placeholder } = props;

  return (
    <input
      type="text"
      className={className}
      value={value}
      format={'mm/dd/yyy'}
      onChange={(e)=>changeHandler(e.target.value,e)}
      placeholder={placeholder}
      name={props.name?props.name:''}
    />
  );
};
