import { Link, useLocation, useNavigate } from "react-router-dom";
import FormInputs from "../../components/UI/FormInputs";
import { useState } from "react";
import { getPasswordStrength, isStrongPassword, preventNonNumericalInput, validateEmail } from "../../utils/commonUtils";
import { _t } from "../../utils/i18nUtils";
import Password from "../../components/UI/FormInputs/Password";
import AuthService from "../../services/AuthService";
import { useToast } from "../../context/ToaxtContext";

export const ResetPassword = () => {
  const { showToast } = useToast();
 const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search)
  const [formData,setFormData] =useState({
    enterpassword:'',
    reenterpassword:'',
    code:'',
  });
  const [validation,setValidation] =useState({
    enterpassword:'',
    reenterpassword:'',
    enterpasswordStrength:[],
    reenterpasswordStrength:[],
  });
  const inputChangeHandler = (value, e) => {
    console.log('value',value);
    let fieldName = e.target.name;
    setFormData({ ...formData, [fieldName]: value });
    setValidation({
      enterpassword:'',
      reenterpassword:'',
      enterpasswordStrength:[],
      reenterpasswordStrength:[],
    }) 
  };
  const submitHandler=async()=>{
    if(isValidPasword()){
      // backend submit Logic 
      const gmailParam = queryParameters.get('gmail');
      let body={
        email: gmailParam,
        code:formData.code,
        password: formData.reenterpassword
      }
      const response =await AuthService.resetPassword(body)
      console.log("reset password Response", response);
      if (response&&response.status==200&&response.data) {
        showToast('success',response.data.data);
        navigate('/login');

      }
      else{
        showToast('error',"Something went wrong");
      }
     }
  }
  const isValidPasword=()=>{
    let isValid=true;
    let enterpassword = formData.enterpassword;
    let reenterpassword = formData.reenterpassword;
    if (enterpassword!==reenterpassword||(enterpassword==''&&reenterpassword=='')) {
      setValidation({
        enterpassword:'Passwords must be Same',
        reenterpassword:'Passwords must be Same'
      })
      return isValid=false;
    }
    setValidation((prevValidation) => ({
      ...prevValidation,
      enterpasswordStrength: isStrongPassword(formData.enterpassword),
      reenterpasswordStrength: isStrongPassword(formData.reenterpassword),
    }));
    if (validation.enterpasswordStrength.length>0||validation.reenterpasswordStrength.length>0) {
      isValid=false;
      return isValid=false;
    }
    if (formData.code=='') {
      setValidation({
        code:'Code must not be empty',
      })
      return isValid=false;
    }
    return isValid;
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 min-vh-100 d-flex flex-column justify-content-center mx-auto">
            {/* <!-- Basic forgot password form--> */}
            <div className="card sh_loginCard border-0 rounded-lg mt-5">
              <div className="card-header justify-content-center">
                <div className="text-center">
                  <img
                    src="/assets/img/logo.png"
                    className="sh_loginLogo"
                    alt="Your Logo"
                  />
                </div>
              </div>
              <div className="card-body">
                <h3 className="fw-light mb-0">{_t('ResetPassword')}</h3>
                {/* <!-- Forgot password form--> */}
                <form className="sh_loginCre">
                  {/* <!-- Form Group (password)--> */}
                  <div className="mb-3">
                    {/* <input className="form-control form-control-fields" id=" " type="password" aria-describedby="emailHelp" placeholder="Enter Password"/> */}
                    <FormInputs
                      type="TextInput"
                      className="form-control form-control-fields"
                      placeholder="Enter Code"
                      name="code"
                      changeHandler={inputChangeHandler}
                      // onKeyPress={preventNonNumericalInput}
                      value={formData['code']}
                    />
                    <span className="text-danger m-1">{validation['code']?validation['code']:""}</span>
                  </div>
                  <div className="mb-3">
                    {/* <input className="form-control form-control-fields" id=" " type="password" aria-describedby="emailHelp" placeholder="Enter Password"/> */}
                    <FormInputs
                      type="Password"
                      className="form-control form-control-fields"
                      placeholder="Enter Password"
                      name="enterpassword"
                      changeHandler={inputChangeHandler}
                      value={formData['enterpassword']}
                    />
                    <span className="text-danger m-1">{validation['enterpassword']?validation['enterpassword']:""}</span>
                    {
                      validation.enterpasswordStrength&&validation.enterpasswordStrength.map((itm)=>{
                        return(
                          <>
                        <span className="text-danger m-1">*{itm}</span><br/>
                        </>
                        )
                      })
                    }
                  </div>
                  <div className="mb-3">
                    {/* <input className="form-control form-control-fields" id=" " type="password" aria-describedby="emailHelp" placeholder="Re-enter Password"/> */}
                    <FormInputs
                      type="Password"
                      className="form-control form-control-fields"
                      placeholder="Re-enter Password"
                      name="reenterpassword"
                      changeHandler={inputChangeHandler}
                      value={formData['reenterpassword']}
                    />
                    <span className="text-danger m-1">{validation['enterpassword']?validation['reenterpassword']:""}</span>
                    
                    {
                      validation.reenterpasswordStrength&&validation.reenterpasswordStrength.map((itm)=>{
                        return(
                          <>
                        <span className="text-danger m-1">*{itm}</span><br/>
                        </>
                        )
                      })
                    }

                  </div>

                  {/* <!-- Form Group (submit options)--> */}
                  <div className="d-flex align-items-center justify-content-center sh_loginButtons">
                  <a class="btn btn-primary btn-user" onClick={()=>submitHandler()}>{_t('submit')}</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
