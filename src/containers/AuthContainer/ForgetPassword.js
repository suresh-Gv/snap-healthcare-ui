import { Link, useLocation, useNavigate } from "react-router-dom";
import FormInputs from "../../components/UI/FormInputs";
import { useState } from "react";
import { getPasswordStrength, isStrongPassword, preventNonNumericalInput, validateEmail } from "../../utils/commonUtils";
import { _t } from "../../utils/i18nUtils";
import Password from "../../components/UI/FormInputs/Password";
import AuthService from "../../services/AuthService";
import { useToast } from "../../context/ToaxtContext";
export const ForgetPassword = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [formData,setFormData] =useState({
    email:'',
  });
  const [validation,setValidation] =useState({
    email:'',
  });
  const inputChangeHandler = (value, e) => {
    let fieldName = e.target.name;
    setFormData({ ...formData, [fieldName]: value });
    setValidation({})
  };
    const submitHandler=async()=>{
      let isValidEmail=validateEmail(formData.email);
      if (isValidEmail) {
        const updateFormData = (newData) => {
          setFormData((prevData) => ({
            ...prevData,
            ...newData,
          }));
        };
        // const  WEB__URL = process.env.REACT_WEB__URL;
        let host=window.location.host;
        let WEB__URL="/login/resetPassword";
        let preparedURL=`${host}${WEB__URL}?gmail=${formData.email}`
       await updateFormData({ resetURL: WEB__URL });
       const response= await AuthService.forgetPasswordEmailResetLink(formData,preparedURL);
       console.log("Forgot Password response",response);
        if (response.code==200) {
          navigate(`/login/resetPassword?gmail=${formData.email}`);
          showToast('success', response.data);
        }
      }
      else{
        setValidation({
          email: "Invalid Email Address"
        })      
      }
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
                      className={validation['email']?'form-control form-control-fields error':'form-control form-control-fields'}
                      // className="form-control form-control-fields"
                      placeholder={_t('enterEmailAddress')}
                      name="email"
                      value={formData['email']}
                      changeHandler={inputChangeHandler}
                    />
                     <span className="text-danger m-1">{validation['email']?validation['email']:""}</span>
                  </div>
                  <div className="small mb-3 text-muted">
                    {_t('resetPasswordDescription')}
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