// routes.js
import Dashboard from "../containers/DashboardContainer";
import User from "../containers/UserContainer";
import Roles from "../containers/RolesContainer";
import Unauthorized from "./Unauthorized";
import Lab from "../containers/LabContainer/LabList";
import ClinicContainer from "../containers/ClinicContainer";

const defaultConfig = {
  layoutType: "App",
  routeType: "Auth",
};
const PublicRoutes = [
  {
    path: "/",
    exact: true,
    element: Dashboard,
    acl: ["any"],
    ...defaultConfig,
    // Add more properties as needed
  },
  {
    path: "/unauthorized",
    exact: true,
    element: Unauthorized,
    acl: ["any"],
    ...defaultConfig,
    // Add more properties as needed
  },
  {
    path: "/dashboard",
    exact: true,
    element: Dashboard,
    ...defaultConfig,
    acl: ["any"],
    // Add more properties as needed
  },
  {
    path: "/users/*",
    exact: true,
    element: User,
    acl: ["user-list", "user-edit"],
    ...defaultConfig,
  },
  {
    path: "/roles/*",
    exact: true,
    element: Roles,
    acl: ["role-list", "role-edit"],
    ...defaultConfig,
  },
  {
    path: "/lab/*",
    exact: true,
    element: Lab,
    // acl:['role-list','role-edit'],
    ...defaultConfig,
  },
  {
    path: "/clinic/*",
    exact: true,
    element: ClinicContainer,
    // acl:['role-list','role-edit'],
    ...defaultConfig,
    // Add more public routes as needed
  },
];

export default PublicRoutes;
