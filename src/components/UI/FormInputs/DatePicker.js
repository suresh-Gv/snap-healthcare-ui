import React from 'react';

export const DatePicker = (props) => {
  const { className, value, onChange, placeholder } = props;

  return (
    <input
      type="date"
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
