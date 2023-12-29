// routes/index.js
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import AuthService from '../services/AuthService';
import AuthRoutes from './authRoutes';
import UnAuthRoutes from './unAuthRoutes';
import Layouts from '../components/Layouts';
import withReduxState from '../hoc/wReduxState';
import { isSet } from '../utils/commonUtils';
import { acl_check } from '../utils/aclUtils';

const AppRoutes = (props) => {
  // const dispatch = useDispatch();

  const PrivateRoute = ({ children, acl }) => {
    const isAuthenticated = AuthService.isAuthenticated();
    let  hasPermission = true; 
    
    try{
       hasPermission = acl_check(props.profile.permissions,isSet(acl,''));
    }catch(e){

    }

    return (isAuthenticated && hasPermission) ? children :(!isAuthenticated)?<Navigate to="/login" />:<Navigate to="/unauthorized" />;
  };

  const PublicRoute = ({ children }) => {
    const isAuthenticated = AuthService.isAuthenticated();
    return isAuthenticated ? <Navigate to="/" /> : children;
  };


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {[...AuthRoutes, ...UnAuthRoutes].map((route, index) => {
          const RouteElement = route.element;
          const WrapRoute = route.routeType === 'Auth' ? PrivateRoute : PublicRoute;
          const layoutType = route.layoutType;
          const acl = route.acl || [];

          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact || false}
              element={
                <WrapRoute acl={acl}>
                  <Layouts type={layoutType}>
                    <RouteElement />
                  </Layouts>
                </WrapRoute>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default withReduxState(AppRoutes);

// // / routes/index.js
// import React,{Suspense } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import AuthService from '../services/AuthService';
// import AuthRoutes from './authRoutes';
// import UnAuthRoutes from './unAuthRoutes';
// import Layouts from '../components/Layouts';

// // import Wrap from '../hoc/Wrap';

// const AppRoutes = () => {
//   const dispatch = useDispatch();
//   const PrivateRoute = ({ children }) => {
//     const isAuthenticated = AuthService.isAuthenticated();
//     return isAuthenticated ? children: <Navigate to="/login" />;
//   }
//   const PublicRoute = ({ children }) => {
//     const isAuthenticated = AuthService.isAuthenticated();
//     return isAuthenticated ? <Navigate to="/" /> : children;
//   }

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//       {[...AuthRoutes,...UnAuthRoutes].map((route,index)=>{
//           const RouteElement = route.element;
//           const WrapRoute = (route.routeType==='Auth')?PrivateRoute:PublicRoute;
//           const layoutType = route.layoutType; 
//           const acl = route.acl || [];
//           return(
//             <Route 
//               key={index}
//               path={route.path}
//               exact={route.exact || false}
//               element={
//                 <WrapRoute>
//                   <Layouts type={layoutType}>
//                     <RouteElement/>
//                   </Layouts>
//                 </WrapRoute>
//               }
//             />
//           )
//         })}
//       </Routes>
//       </Suspense>
//   );
// };

// export default AppRoutes;