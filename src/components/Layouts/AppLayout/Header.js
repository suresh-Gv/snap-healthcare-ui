import React from "react";
import { useNavigate } from "react-router-dom";
import { _t } from "../../../utils/i18nUtils";
import AuthService from "../../../services/AuthService";
import Wrap from "../../../hoc/Wrap";
import { useSelector } from 'react-redux';

const Header = (props)=>{
    const navigate = useNavigate();
    const profileDetails = useSelector((state) => state.session.profileDetails);
    console.log('profileDetails',profileDetails);
    const {name,role} = profileDetails;
    const onlogoutHandler = () => {
      AuthService.logout();
      navigate('/login');
    };
  
    const userProfileList = [{
        label:'Profile',
        fontIcon:'fa-user',
        clickHandler:()=>{}
    },
    {
        label:'Change Password',
        fontIcon:'fa-user',
        clickHandler:()=>{}
    },
    {
        label:'Logout',
        isDivider:true,
        clickHandler:()=>onlogoutHandler(),
        fontIcon:'fa-sign-out-alt'
    }]
    return(
        
           <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top" style={{background:'#f4faff'}}>
              {/* <!-- Sidebar Toggle (Topbar) --> */}
              <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
              </button>
               
              <ul className="navbar-nav ml-auto">
                   
                 {/* <!-- Nav Item - User Information --> */}
                 <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="#!" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                     
                           <img className="img-profile rounded-circle" src="assets/img/User_profile.svg" alt={_t('snap health admin')}/>
                           <span className="ml-2 d-none d-lg-inline text-black text-lg">{_t(name+' '+role)}</span>
                       </a>
                    {/* <!-- Dropdown - User Information --> */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        {userProfileList.map((item,itemIndex)=>{
                            return(
                                <Wrap key={itemIndex}>
                                {(item.isDivider?<div className="dropdown-divider"></div>:<></>)}
                                <a className="dropdown-item" href="#!" onClick={()=>item.clickHandler()}>
                                    <i className={`fas ${item.fontIcon} fa-sm fa-fw mr-2 text-gray-400`}></i>
                                    {_t(item.label)}
                                </a>
                                </Wrap>
                            )
                        })}
                    </div>
                 </li>
              </ul>
           </nav>
           
      
         
    )
}
export default Header;