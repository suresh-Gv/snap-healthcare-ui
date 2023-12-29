// routes.js
import Dashboard from '../containers/DashboardContainer';
import User from '../containers/UserContainer';
import Roles from '../containers/RolesContainer';
import Unauthorized from './Unauthorized';

const defaultConfig = {
  layoutType:'App',
  routeType:'Auth'
}
const PublicRoutes = [
    {
      path: '/',
      exact: true,
      element: Dashboard,
      ...defaultConfig
      // Add more properties as needed
    },
    {
      path: '/unauthorized',
      exact: true,
      element: Unauthorized,
      ...defaultConfig
      // Add more properties as needed
    },
    {
        path: '/dashboard',
        exact: true,
        element:Dashboard,
        ...defaultConfig
        // Add more properties as needed
      },
      {
        path:'/users/*',
        exact: true,
        element:User,
        acl:['user-list','user-edit'],
        ...defaultConfig
      },
      {
        path:'/roles/*',
        exact: true,
        element:Roles,
        acl:['role-list','role-edit'],
        ...defaultConfig
      }
    // Add more public routes as needed
  ];


export default PublicRoutes;