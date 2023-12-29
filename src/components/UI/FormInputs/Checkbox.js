import React from 'react';
import PropTypes from 'prop-types';
import { isSet } from '../../../utils/commonUtils';

const CheckboxInput = (props) => {
  const {
    className,
    label,
    value,
    style,
    name,
    changeHandler,
    id
  } = props;

  const onChangeHandler = (e) => {
    console.log('e',e.target.checked);
    changeHandler(e.target.checked, e);
  };
  let isChecked = (value === true || isSet(value,'').toString().toLowerCase() === 'yes')?true:false;
  // console.log('checked',isChecked,props);
  return (
    <div className={className}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          style={style}
          name={name}
          id={id}
          onChange={(e) => onChangeHandler(e)}
        />
        {label}
      </label>
    </div>
  );
};

CheckboxInput.defaultProps = {
  className: 'checkbox-container',
  checked: false,
  value: false,
  name:'default',
  style: {},
  id:0,
  onChangeHandler:()=>{}
};

CheckboxInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  style: PropTypes.object,
  changeHandler: PropTypes.func.isRequired,
};

export default CheckboxInput;