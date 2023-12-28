import React, { useState } from "react";
import { _t } from "../../utils/i18nUtils";
import {
  // useLocation,
  useNavigate,
  // useParams
} from "react-router-dom";
// import FormInputs from "../../components/UI/FormInputs";
import AuthService from "../../services/AuthService";
import FormInputs from "../../components/UI/FormInputs";
import UserService from "../../services/UserService";
import { useDispatch } from 'react-redux';
import {setProfileDetails} from '../../store/SessionSlice';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    // Handle login logic here
    const credentials = { email, password };
    const userData    = await AuthService.login(credentials);
    const profileData = await UserService.fetchProfile();
    dispatch(setProfileDetails(profileData));
    const isAuthenticated = AuthService.isAuthenticated();
    if (isAuthenticated === true) {
      navigate("/dashboard");
    }
    //api/user_profile
    console.log("Logging in with:", userData, AuthService.getToken());
  };
  return (
    <>
        <div className="row justify-content-center">
          <div className="col-lg-6 min-vh-100 d-flex flex-column justify-content-center mx-auto">
            <div className="row">
              <div className="col-md-9 mx-auto">
                <div className="card sh_loginCard o-hidden border-0 my-5">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="text-center">
                          <img src="assets/img/logo.png" className="sh_loginLogo" />
                        </div>
                        <form className="sh_loginCre">
                          <div className="form-group">
                            {/* <input type="email" className="form-control form-control-user" id="" aria-describedby="" placeholder="Email Address"/> */}
                            <FormInputs
                              fieldType="TextInput"
                              value={email}
                              changeHandler={(e) => setEmail(e)}
                              style={styles.input}
                              className="form-control form-control-user"
                              placeholder={_t('emailAddress')}
                            />
                          </div>

                          <div className="form-group">
                            <FormInputs
                              fieldType="Password"
                              value={password}
                              changeHandler={(e) => setPassword(e)}
                              style={styles.input}
                              className="form-control form-control-user"
                              placeholder={_t('password')}
                            />
                          </div>

                          <div className="form-group sh_loginButtons">
                            <div className="d-flex align-items-center justify-content-between">
                              <a
                                onClick={handleLogin}
                                className="btn btn-primary btn-user"
                              >
                                {_t('login')}
                              </a>
                              <a href="#" className="btn btn-primary btn-user">
                                {_t('SelfRegister')}
                              </a>
                            </div>
                          </div>
                        </form>

                        <div className="text-left">
                          <a className="action-text" href="#">
                            {_t('ForgotPassword')}? / {_t('FirstTimeUser')}
                          </a>
                        </div>

                        <div className="text-left">
                          <hr className="my-2" />
                          <p>
                            {_t('loginTerms')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
