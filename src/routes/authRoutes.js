// routes.js
import Dashboard from '../containers/DashboardContainer';
import User from '../containers/UserContainer';

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
      }
    // Add more public routes as needed
  ];


export default PublicRoutes;