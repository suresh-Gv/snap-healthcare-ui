import React, { createContext, useContext, useState } from 'react';
import { capitalizeFirstLetter } from '../utils/commonUtils';
export const ToastContext = createContext();
const types = {
    error:'danger',
    success:'success',
    warning:'warning'
}
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (type, message, timeout = 5000) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, type, message }]);
    
    setTimeout(() => {
      hideToast(id);
    }, timeout);
  };

  const hideToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const toastContextValue = {
    showToast,
    hideToast,
  };

  return (
    <ToastContext.Provider value={toastContextValue}>
      {children}
      <div style={{position:'absolute',top:'1rem',right:'1rem',zIndex:'9999'}}>
      {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${types[toast.type]}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ opacity: 1,minWidth:'350px' }}>
          <div class={`toast-header text-${types[toast.type]}`}>
              <i data-feather="bell"></i>
              <strong class="mr-auto">{capitalizeFirstLetter(toast.type)} </strong>
              {/* <small class="text-muted ml-2">just now</small> */}
              <button className="ml-2 mb-1 btn-close" type="button" onClick={() => hideToast(toast.id)} aria-label="Close"></button>
          </div>
          <div class="toast-body">{toast.message}</div>
      </div>
       ))}
    </div>
    </ToastContext.Provider>
  );
};