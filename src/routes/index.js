// / routes/index.js
import React,{Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import AuthRoutes from './authRoutes';
import UnAuthRoutes from './unAuthRoutes';
import Layouts from '../components/Layouts';
// import Wrap from '../hoc/Wrap';

const AppRoutes = () => {
  const PrivateRoute = ({ children }) => {
    const isAuthenticated = AuthService.isAuthenticated();
    return isAuthenticated ? children: <Navigate to="/login" />;
  }
  const PublicRoute = ({ children }) => {
    const isAuthenticated = AuthService.isAuthenticated();
    return isAuthenticated ? <Navigate to="/" /> : children;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      {[...AuthRoutes,...UnAuthRoutes].map((route,index)=>{
          const RouteElement = route.element;
          const WrapRoute = (route.routeType==='Auth')?PrivateRoute:PublicRoute;
          const layoutType = route.layoutType;
          return(
            <Route 
              key={index}
              path={route.path}
              exact={route.exact || false}
              element={
                <WrapRoute>
                  <Layouts type={layoutType}>
                    <RouteElement/>
                  </Layouts>
                </WrapRoute>
              }
            />
          )
        })}
      </Routes>
      </Suspense>
  );
};

export default AppRoutes;