import React from 'react';
import InputMask from 'react-input-mask';
import { preventNonNumericalInput } from '../../../utils/commonUtils';

const PhoneNumber = (props) => {
  const defaultPhoneNumberFormat = "(999) 999-9999";
  const defaultMaskChar = '_';

  const handlePhoneNumberChange = (e) => {
    console.log('Input value:', e.target.value);
    // Check if props.changeHandler is defined
    if (props.changeHandler) {
      props.changeHandler(e.target.value, e);
    }
  };

  return (
    <div>
      <InputMask
        mask={props.phoneNumberFormat ? props.phoneNumberFormat : defaultPhoneNumberFormat}
        maskChar={defaultMaskChar}
        value={props.value}
        name={props.name?props.name:''}
        className={props.className ? props.className : ''}
        onChange={handlePhoneNumberChange}
        onKeyUp={(e) => preventNonNumericalInput(e)}
      />
    </div>
  );
};

export default PhoneNumber;
