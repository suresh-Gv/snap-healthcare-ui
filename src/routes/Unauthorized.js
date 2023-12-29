// components/Unauthorized.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page in the history
  };

  return (
    <div>
      <h1>Unauthorized</h1>
      <p>You don't have permission to access this page.</p>
      <button onClick={handleGoBack}>Go Back</button>
      {/* You can add more content or styling as needed */}
    </div>
  );
};

export default Unauthorized;
