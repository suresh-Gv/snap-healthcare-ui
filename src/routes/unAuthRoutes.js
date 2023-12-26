// routes.js
import AuthContainer from '../containers/AuthContainer';

const defaultConfig = {
  layoutType:'Default',
  routeType:'Public'
}
const PublicRoutes = [
    {
        path: '/login',
        // exact: true,
        element:AuthContainer,
        // element: <AuthContainer />,
        ...defaultConfig
      },
  ];


export default PublicRoutes;