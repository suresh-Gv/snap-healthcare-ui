import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, iconType, clickHandler }) => (
  <button className="btn btn-datatable btn-icon btn-transparent-dark" onClick={clickHandler}>
    <Icons type={iconType} />
    {label}
  </button>
);

Button.defaultProps = {
    clickHandler:()=>{}
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default Button;