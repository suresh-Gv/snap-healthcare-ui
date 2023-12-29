import { Link, useNavigate } from "react-router-dom";
import FormInputs from "../../components/UI/FormInputs";
import { useState } from "react";
import { validateEmail } from "../../utils/commonUtils";
import { _t } from "../../utils/i18nUtils";




const ForgetPassword = () => {
  const navigate = useNavigate();
  const [formData,setFormData] =useState({
    email:''   
  });
  const [validation,setValidation] =useState({
    email:'',
  });
  const inputChangeHandler = (value, e) => {
    let fieldName = e.target.name;
    setFormData({ ...formData, [fieldName]: value });
    setValidation({})
  };
    const submitHandler=()=>{
      let isValidEmail=validateEmail(formData.email);
      if (isValidEmail) {
        //Backend Email Check API
        console.log("ResetPassword:",formData);
        navigate('/login/resetPassword'); 
      }
      else{
        setValidation({
          email: "Invalid Email Address"
        })      }
  }
  return (
    <>
      <div className="container ">
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
                <h3 className="fw-light  mb-0">{_t('PasswordRecovery')}</h3>
                {/* <!-- Forgot password form--> */}
                <form className="sh_loginCre">
                  {/* <!-- Form Group (email address)--> */}
                  <div className="mb-3">
                    <FormInputs
                      type="TextInput"
                      className="form-control form-control-fields"
                      placeholder={_t('enterEmailAddress')}
                      name="email"
                      value={formData['email']}
                      changeHandler={inputChangeHandler}
                    />
                     <span className="text-danger m-1">{validation['email']?validation['email']:""}</span>
                  </div>
                  <div className="small mb-3 text-muted">
                    Enter your email address and we will send you a link to
                    reset your password.
                  </div>
                  {/* <!-- Form Group (submit options)--> */}
                  <div className="d-flex align-items-center justify-content-center sh_loginButtons ">
                  <a class="btn btn-primary btn-user" onClick={()=>submitHandler()}>{_t('resetPassword')}</a>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <div className="action-text">
                  <Link to="/login">{_t('returnToLogin')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// ****************************************************************////////////////////////////////




const ResetPassword = () => {
  const [formData,setFormData] =useState({
    enterpassword:'',
    reenterpassword:'',
  });
  const [validation,setValidation] =useState({
    enterpassword:'',
    reenterpassword:'',
  });
  const inputChangeHandler = (value, e) => {
    let fieldName = e.target.name;
    setFormData({ ...formData, [fieldName]: value });
    setValidation({})
  };
  const submitHandler=()=>{
    console.log("ResetPassword formData:", formData);
    console.log("check Both Password same",formData.enterpassword==formData.reenterpassword);
    if(formData.enterpassword==formData.reenterpassword){
      // backend submit Logic 
    }
    else{
      setValidation({
        enterpassword:'invalid passwords',
        reenterpassword:'invalid passwords'
      })
      console.log("validation",validation);
    }
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
                <h3 className="fw-light mb-0">Reset Password</h3>
                {/* <!-- Forgot password form--> */}
                <form className="sh_loginCre">
                  {/* <!-- Form Group (password)--> */}
                  <div className="mb-3">
                    {/* <input className="form-control form-control-fields" id=" " type="password" aria-describedby="emailHelp" placeholder="Enter Password"/> */}
                    <FormInputs
                      type="TextInput"
                      className="form-control form-control-fields"
                      placeholder="Enter Password"
                      name="enterpassword"
                      changeHandler={inputChangeHandler}
                      value={formData['enterpassword']}
                    />
                    <span className="text-danger m-1">{validation['enterpassword']?validation['enterpassword']:""}</span>
                  </div>
                  <div className="mb-3">
                    {/* <input className="form-control form-control-fields" id=" " type="password" aria-describedby="emailHelp" placeholder="Re-enter Password"/> */}
                    <FormInputs
                      type="TextInput"
                      className="form-control form-control-fields"
                      placeholder="Re-enter Password"
                      name="reenterpassword"
                      changeHandler={inputChangeHandler}
                      value={formData['reenterpassword']}
                    />
                    <span className="text-danger m-1">{validation['enterpassword']?validation['reenterpassword']:""}</span>

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
export { ForgetPassword, ResetPassword };
