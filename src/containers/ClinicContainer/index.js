import { Route, Routes } from "react-router-dom";
import Wrap from "../../hoc/Wrap";
import ClinicList from "./ClinicList";

const ClinicContainer = () => {

  return (
    <Wrap>  
      {/* Other common elements in UserContainer */}
      <Routes>
        <Route path="/" key={0}  element={<ClinicList/>} />
        {/* <Route path="/permissions" key={1} element={</>}/> */}
      </Routes>
      {/* <Outlet /> */}
  
     
        
    </Wrap>
  );
};






export default ClinicContainer;
