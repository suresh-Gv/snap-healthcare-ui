import { Route, Routes } from "react-router-dom";
import Wrap from "../../hoc/Wrap";
import LabList from "./LabList";

const LabContainer = () => {

  return (
    <Wrap>  
      {/* Other common elements in UserContainer */}
      <Routes>
        <Route path="/" key={0}  element={<LabList/>} />
        {/* <Route path="/permissions" key={1} element={</>}/> */}
      </Routes>
      {/* <Outlet /> */}
  
     
        
    </Wrap>
  );
};






export default LabContainer;
