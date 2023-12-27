// routes.js
import Dashboard from '../containers/DashboardContainer';
import User from '../containers/UserContainer';
import Roles from '../containers/RolesContainer';

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
        ...defaultConfig
      },
      {
        path:'/roles/*',
        exact: true,
        element:Roles,
        ...defaultConfig
      }
    // Add more public routes as needed
  ];


export default PublicRoutes;