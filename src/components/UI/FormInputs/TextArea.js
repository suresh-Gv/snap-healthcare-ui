import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  const {
    className,
    placeholder,
    value,
    style,
    name,
  } = props;

  const { changeHandler } = props;

  const onChangeHandler = (e) => {
    changeHandler(e.target.value, e);
  };

  return (
    <textarea
      className={className}
      name={name}
      placeholder={placeholder}
      value={value}
      {...style}
      onChange={(e) => onChangeHandler(e)}
    />
  );
};

TextArea.defaultProps = {
  className: 'form-control',
  placeholder: '',
  value: '',
  style: {},
};

TextArea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
  changeHandler: PropTypes.func.isRequired,
};

export default TextArea;
