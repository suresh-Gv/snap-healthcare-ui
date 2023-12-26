import React from "react";
import AppLayout from "./AppLayout";
import DefaultLayout from "./Default";
const Layouts = ({type,children})=>{
    switch (type) {
        case 'App':
           return <AppLayout>{children}</AppLayout>;
        default:
          return <DefaultLayout>{children}</DefaultLayout>;
    }
   
}

export default Layouts;