import React, {useRef } from "react";
import Icons from "../../UI/Icons";
import Buttons from "../../UI/Buttons";
import Acl from "../../../hoc/Acl";
import { useNavigate } from "react-router-dom"

const Menus = (props) => {
  const {sideBarChangeHandler}=props;
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    //navigate to the desired route
        navigate(link);
      };
  return (
    <aside ref={menuRef}>
      <ul
        className="navbar-nav sidebar sidebar-dark accordion toggled"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand  */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
          role="button"
        >
          <div className="sh_logoIcon">
            <div className="sidebar-brand-icon">
              <Icons type={`Logo`} />
            </div>
          </div>
        </a>
        {props.MenusData.map((menu, index) => {
          return (
            <Acl acl={menu.acl}>
              <li className="nav-item" key={index}>
                <Buttons className="nav-link" href={menu.link} acl={'any'}>
                    <span className="sh_menuIcon">
                      <Icons type={menu.iconType} />
                    </span>
                    <span className="text-gray-600">{menu.title}</span>
                
                </Buttons>
              </li>
            </Acl>
          );
        })}
        <li className="nav-item">
          <a
            className="nav-link"
            href={"#"}
            onClick={(e) =>sideBarChangeHandler()}
          >
            <span className="sh_menuIcon">
              <Icons type="Settings" />
            </span>
            <span className="text-gray-600">Configure</span>
          </a>
        </li>
      </ul>
      <div className="side_Inner">
        <div className="nav-link">
          {props.Configures.map((item, index) => (
            <Buttons 
              acl={item.acl}
              accessType={'Hide'} 
              href={item.link} 
              className="side_InnerText" 
              key={index} 
              label={item.Title}/>
            
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Menus;
