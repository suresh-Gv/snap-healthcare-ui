  import React, {useState } from "react";
  import Header from "./Header";
  import Menus from "./Menus";

  const AppLayout = ({ children }) => {
    const [isSidebarShown, setSidebarShown] = useState(false);
    const sideBarChangeHandler = () => {
      setSidebarShown(!isSidebarShown);
    };
    const MenusData = [
      {
        title: "Companies",
        link: "#",
        acl:['any'],
        iconType: "Company",
      },
      {
        title: "Appointments",
        link: "#",
        acl:['any'],
        iconType: "Schedule",
      },
      {
        title: "White Board",
        link: "#",
        acl:['any'],
        iconType: "WhiteBoard",
      },
      {
        title: "Employee / Patient Visits",
        link: "#",
        acl:['any'],
        iconType: "PatientVisit",
      },
      {
        title: "Labs",
        link: "#",
        acl:['labs-list'],
        iconType: "Labs",
      },
      {
        title: "Orders/Results",
        link: "#",
        acl:['any'],
        iconType: "Results",
      },
      {
        title: "Employee / Patient Chart",
        link: "#",
        acl:['any'],
        iconType: "PatientChart",
      },
    ];
    const Configures = [
      { Title: "Users", link: "/users",acl:'user-list' },
      { Title: "Roles & Permission", link: "/roles",acl:'role-list' },
      { Title: "Clinics & Providers", link: "#",acl:'any' },
      // { Title: "Company Divisions", link: "#" },
      // { Title: "Clinic Locations", link: "#" },
      // { Title: "Vaccine Administration", link: "#" },
      // { Title: "Basic Physicals", link: "#" },
      // { Title: "Activities", link: "#" },
      // { Title: "Lab Ordered Message", link: "#" },
      // { Title: "Incoming Results", link: "#" },
      // { Title: "Failed EZ-Reader", link: "#" },
      // { Title: "CDPH Export", link: "#" },
      // { Title: "NY Export", link: "#" },
      // { Title: "Feedback", link: "#" },
      // { Title: "Laboratory", link: "#" },
      // { Title: "API Log", link: "#" },
      // { Title: "Tutorials", link: "#" },
      // { Title: "Main Features", link: "#" },
      // { Title: "Announcements", link: "#" },
      // { Title: "Clinic Usage", link: "#" },
      // { Title: "Consent Form", link: "#" },
      // { Title: "Activity Consents", link: "#" },
      // { Title: "Consent Declination", link: "#" },
      // { Title: "Announcements", link: "#" },




    ];
    return (
      <div class={isSidebarShown ? "show-sidebar" : ""}>
        <div id="wrapper">
          <Menus
            MenusData={MenusData}
            Configures={Configures}
            sideBarChangeHandler={sideBarChangeHandler}
          />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              <Header />
              <div className="container-fluid">{children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default AppLayout;
