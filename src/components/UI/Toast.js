import React from "react";


const Toast = ()=>{
    
    return(
        <div style={{position:'absolute',top:'1rem',right:'1rem',zIndex:'1'}}>
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" style={{opacity: 1}}>
          <div class="toast-header text-danger">
              <i data-feather="bell"></i>
              <strong class="mr-auto">Danger Text Toast</strong>
              <small class="text-muted ml-2">just now</small>
              <button class="ml-2 mb-1 btn-close" type="button" data-bs-dismiss="toast" aria-label="Close">                                                            </button>
          </div>
          <div class="toast-body">This toast uses the danger text utility on the toast header.</div>
      </div>
    </div>
    )
}