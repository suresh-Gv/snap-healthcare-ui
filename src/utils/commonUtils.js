//CHECK IS  OBJECT OR NOT
export const isObject = (o) => {
    return o instanceof Object && o.constructor === Object;
}

//CHECK IS  NUMBER OR NOT
export const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

//CHECK IS THE STRING IS JSON STRING OR NOT
export const IsJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
//CHECK IS DATE OR NOT
export const isDate = (sDate) => {
    if (isSet(sDate, '').toString() == parseInt(isSet(sDate, '')).toString()) return false;
    var tryDate = new Date(sDate);
    return (tryDate && tryDate.toString() != "NaN" && tryDate != "Invalid Date");
}

export const capitalizeFirstLetter = (text) => {
    let returnData = '';
    if(text) {
      returnData = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    return returnData;
  }
//CHECK IS EMAIL OR NOT
export const isEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
//EMAIL VALIDATION
export const validateEmail = (inputMail) => {
    let isValid = true;
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(inputMail)) {
        isValid = false;
    }
    return isValid;
}

export const isSet = (val, def, type = '') => {
    const decimalPointFields = ['Currency', 'Decimal', 'Number', 'LongNumber'];
    if (decimalPointFields.indexOf(type) !== -1 && val !== undefined && val !== 'undefined' && val !== '' && val !== null) {
        if (isSet(val, '') == 0) {
            return def;
        }
        return isSet(val, '');
    } else if ((val !== undefined && val !== 'undefined' && val !== '' && val !== null && type !== 'ARRAY') || (type === 'ARRAY' && isSet(val, []).length != 0)) {
        return val;
    }
    return def;
}

//Non Numeric Input Validation {phone number}
export const preventNonNumericalInput = (event) => {
    const keyCode = event.keyCode || event.which;
  
    // Allow: Backspace, Tab, Enter, Delete
    if (keyCode === 46 || keyCode === 8 || keyCode === 9 || keyCode === 13 || keyCode === 110 || keyCode === 190) {
      return;
    }
  
    // Ensure that it is a number and stop the keypress
    if ((keyCode < 48 || keyCode > 57) && (keyCode < 96 || keyCode > 105)) {
      event.preventDefault();
    }
  };
  
  export const isStrongPassword = (password) => {
    const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

  if (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar
  ) {
    return []; // Password is strong
  }

  // Password is weak, construct and return a validation message
  const validationMessages = [];
  if (password.length < minLength) {
    validationMessages.push("Password must be at least 8 characters long.");
  }else
  if (!hasUppercase) {
    validationMessages.push("Password must contain at least one uppercase letter.");
  }
  if (!hasLowercase) {
    validationMessages.push("Password must contain at least one lowercase letter.");
  }
  if (!hasNumber) {
    validationMessages.push("Password must contain at least one number.");
  }
  if (!hasSpecialChar) {
    validationMessages.push("Password must contain at least one special character.");
  }

  return validationMessages;
  };
  export const getPasswordStrength = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if the password meets all criteria
    if (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar
    ) {
      return 'Strong Password';
    } else {
      return 'Weak Password';
    }
  };