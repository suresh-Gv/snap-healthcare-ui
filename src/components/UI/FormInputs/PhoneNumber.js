import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { preventNonNumericalInput } from '../../../utils/commonUtils';

const PhoneNumber = (props) => {
  const{phoneNumberFormat} = props;
  const defaultPhoneNumberFormat = "(999) 999-9999";
  const defaultMaskChar = '_';

  const handlePhoneNumberChange = (e) => {
    // Check if props.changeHandler is defined
    if (props.changeHandler) {
      props.changeHandler(e.target.value, e);
    }
  };

  return (
    <InputMask
      mask={phoneNumberFormat ? phoneNumberFormat : defaultPhoneNumberFormat}
      maskChar={defaultMaskChar}
      value={props.value}
      placeHolder={props.placeholder}
      name={props.name ? props.name : ''}
      className={props.className ? props.className : ''}
      onChange={handlePhoneNumberChange}
      onKeyUp={(e) => preventNonNumericalInput(e)}
    />
  );
};

PhoneNumber.defaultProps = {
  phoneNumberFormat: '',
  value: '',
  name: '',
  placeholder:'',
  className: '',
};

PhoneNumber.propTypes = {
  phoneNumberFormat: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  changeHandler: PropTypes.func,
};

export default PhoneNumber;

