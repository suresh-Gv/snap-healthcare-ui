import { Route, Routes } from "react-router-dom";
import Wrap from "../../hoc/Wrap";
import LoginForm from "./LoginForm";
// import TextInput from "../../components/UI/FormInputs/TextInput";
import {ForgetPassword, ResetPassword } from "./ForgetPassword";

const AuthContainer = () => {
  // const forgetPasswordInput={
  //   title: "Password Recovery",
  //   body:[{"label":"email Address","placeHolder":"Enter Email Address"},
  //   {"label":"email Address","placeHolder":"Enter Email Address"}
  // ],
  // description:"Enter your email address and we will send you a link to reset your password.",
  // submmitButtonText:"Reset Password",

  // }
  // const recoveryPasswordInput = {
  //   title: "Reset Password",
  //   body:[{"label":"email Address","placeHolder":"Enter Email Address"}]
  // };
  return(
    <Wrap>  
      {/* Other common elements in UserContainer */}
      <Routes>
        <Route path="/" key={0}  element={<LoginForm/>} />
        <Route path="/forgetPassword" key={1} element={<ForgetPassword/>}/>
        <Route path="/resetPassword" key={1} element={<ResetPassword/>}/>
      </Routes>
      {/* <Outlet /> */}
  
     
        
    </Wrap> 
       );
      };
export default AuthContainer;
