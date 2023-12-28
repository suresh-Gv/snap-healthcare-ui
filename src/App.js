import React from 'react';
import { BrowserRouter   } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';
import { ToastProvider } from './context/ToaxtContext';

function App() {
  
  return(
    <BrowserRouter>
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </BrowserRouter>
  )
}



export default App;


// function App() {
  
//   return(
//     <Router>
//       <Routes>
        // {routes.PublicRoutes.map((route,index)=>{
        //   const RouteElement = route.element;
        //   return(
        //     <Route 
        //       key={index}
        //       path={route.path}
        //       exact={route.exact || false}
        //       element={<RouteElement/>}
        //     />
        //   )
        // })}
//       </Routes>
//     </Router>
//   )
// }



// export default App;