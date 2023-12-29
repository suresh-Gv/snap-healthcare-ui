import React, {useRef } from "react";
import Icons from "../../UI/Icons";
import Buttons from "../../UI/Buttons";

const Menus = (props) => {
  const {sideBarChangeHandler}=props;
  // const [isSidebarShown, setSidebarShown] = useState(false);
  const menuRef = useRef(null);

  /*------- outside Onclick for hide Setting Menu -----------*/
  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target) && isSidebarShown) {
  //       setSidebarShown(false);
  //     }
  //   };

  //   document.addEventListener('mouseup', handleOutsideClick);

  //   return () => {
  //     document.removeEventListener('mouseup', handleOutsideClick);
  //   };
  // }, [isSidebarShown]);
  // useEffect(()=>{
  //   sideBarChangeHandler(false);
  // },[isSidebarShown]);
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
            <li className="nav-item" key={index}>
              <a className="nav-link" href={menu.link}>
                <span className="sh_menuIcon">
                  <Icons type={menu.iconType} />
                </span>
                <span className="text-gray-600">{menu.title}</span>
              </a>
            </li>
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
            <Buttons acl={item.acl} href={item.link} className="side_InnerText" key={index} label={item.Title}/>
            
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Menus;
