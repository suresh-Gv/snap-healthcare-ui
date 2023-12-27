import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = (props) => {
  const {
    className,
    label,
    checked,
    style,
    changeHandler,
  } = props;

  const onChangeHandler = (e) => {
    changeHandler(e.target.checked, e);
  };

  return (
    <div className={className}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          style={style}
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
  style: {},
};

CheckboxInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  style: PropTypes.object,
  changeHandler: PropTypes.func.isRequired,
};

export default CheckboxInput;