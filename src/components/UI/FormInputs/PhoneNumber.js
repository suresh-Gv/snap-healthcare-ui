import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { preventNonNumericalInput } from '../../../utils/commonUtils';
const PhoneNumber = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const defaultPhoneNumberFormat="(999) 999-9999"; //"(999) 999-****"
  let defaultMaskChar='_'; //"*","9","A"
const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    props.changeHandler(phoneNumber);
  };

  return (
    <div>
      <InputMask
        mask={props.phoneNumberFormat?props.phoneNumberFormat:defaultPhoneNumberFormat}
        maskChar={defaultMaskChar}
        value={phoneNumber}
        className={props.className?props.className:''}
        onChange={handlePhoneNumberChange}
        onKeyUp={(e)=>preventNonNumericalInput(e)}
      />
    </div>
  );
};

export default PhoneNumber;

/*
Referenced : https://www.npmjs.com/package/react-input-mask
*/