// components/Unauthorized.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Navigate back in history if available
    } else {
      navigate('/dashboard'); // Redirect to the dashboard screen if no history
    }
  };

  return (
    <div className="error-middle">
      <h1>Error 401 - Unauthorized</h1>
      <p>
        The 401 (Unauthorized) status code indicates that the request has not been applied because it
        lacks valid authentication credentials for the target resource.
      </p>
      <button className="btn btn-outline-secondary rounded-pill" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default Unauthorized;
