// routes.js
import Dashboard from '../containers/DashboardContainer';


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
    // Add more public routes as needed
  ];


export default PublicRoutes;