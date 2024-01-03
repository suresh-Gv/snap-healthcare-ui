import React, { useState } from "react";
import { _t } from "../../utils/i18nUtils";
import { isSet } from "../../utils/commonUtils";
import {
  Link,
  // useLocation,
  useNavigate,
  // useParams
} from "react-router-dom";
// import FormInputs from "../../components/UI/FormInputs";
import AuthService from "../../services/AuthService";
import FormInputs from "../../components/UI/FormInputs";
import Card from "../../components/UI/Card";
import UserService from "../../services/UserService";
import { useDispatch } from 'react-redux';
import {setProfileDetails} from '../../store/SessionSlice';
import { useToast } from '../../context/ToaxtContext';
import Buttons from "../../components/UI/Buttons";
// import logo from '../../../public/assets/img/logo'


const LoginForm = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation,setValidation] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    // Handle login logic here
    
    const credentials = { email, password };
    try{
      const userData    = await AuthService.login(credentials);
      if(userData.status && userData.status=='ERROR'){
        setValidation(isSet(userData.data.error,'Authentication failed')+'  The information you have provided cannot be authenticated. Check your login information and try again');
      }
      const isAuthenticated = AuthService.isAuthenticated();
      // console.log('isAuthenticated',isAuthenticated);
      if (isAuthenticated === true) {
        const profileData = await UserService.getUserProfile();
        // console.log('profileData',profileData);
        dispatch(setProfileDetails(profileData));
        navigate("/dashboard");
      }
    }catch(e){

    }
    
    
    //api/user_profile
    // console.log("Logging in with:", userData, AuthService.getToken());
  };
  const footerBtn = {
    type:'BtnList',
    buttonList:[
      {
        clickHandler:handleLogin,
        className:"btn btn-primary btn-user",
        acl:'any',
        label:_t('login'),
      },
      {
        clickHandler:handleLogin,
        className:"btn btn-primary btn-user",
        label:_t('SelfRegister'),
        acl:'any',
      }
    ]
  }
  
  return (
    <>
      
        <div className="row justify-content-center">
          <div className="col-lg-6 min-vh-100 d-flex flex-column justify-content-center mx-auto">
            <div className="row">
              <div className="col-md-9 mx-auto">
                <Card className="sh_loginCard o-hidden border-0 my-5">
                    <div className="row">
                      <div className="col-lg-12">
                     
                        <div className="text-center">
                        <img src="/assets/img/logo.png" class="sh_loginLogo"/>
                        </div>
                        {isSet(validation,'')!=='' ? <p className="text-danger m-1" style={{fontSize:'12px'}}>{isSet(validation,'')}</p> : ''}
                        <form className="sh_loginCre">
                          <div className="form-group">
                            {/* <input type="email" className="form-control form-control-user" id="" aria-describedby="" placeholder="Email Address"/> */}
                            <FormInputs
                              type="TextInput"
                              value={email}
                              changeHandler={(e) =>{setValidation(''); setEmail(e)}}
                              style={styles.input}
                              className="form-control form-control-user"
                              placeholder={_t('emailAddress')}
                            />
                          </div>

                          <div className="form-group">
                            <FormInputs
                              type="Password"
                              value={password}
                              changeHandler={(e) => {setValidation('');setPassword(e);}}
                              style={styles.input}
                              className="form-control form-control-user"
                              placeholder={_t('password')}
                            />
                          </div>

                          <div className="form-group sh_loginButtons">
                            <div className="d-flex align-items-center justify-content-between">
                              <Buttons {...footerBtn} />
                            </div>
                          </div>
                        </form>

                        <div className="text-left">
                          <Buttons 
                            href='/login/forgetPassword'
                            className="action-text"
                            acl='any'
                            label={`${_t('ForgotPassword')}/${_t('FirstTimeUser')}`} />
                        </div>
                        <div className="text-left">
                          <hr className="my-2" />
                          <p>
                            {_t('loginTerms')}
                          </p>
                        </div>
                      </div>
                    </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  label: {
    marginBottom: "5px",
  },
  input: {
    marginBottom: "15px",
    padding: "8px",
  },
  button: {
    backgroundColor: "#544CF9",
    color: "white",
    padding: "10px",
    cursor: "pointer",
  },
};

export default LoginForm;
