import React from 'react';

export const PatientVisitIcon = ({size}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 41.137 51.172">
      <defs>
        <linearGradient id="linear-gradient" x1="0.773" y1="1.25" x2="0.227" y2="-0.25" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#6114f8" />
          <stop offset="0.167" stopColor="#6e23f9" />
          <stop offset="1" stopColor="#00b6ff" />
        </linearGradient>
      </defs>
      <path
        id="work-restrictions"
        d="M223.526,165.154H216V155.12a12.539,12.539,0,0,1,12.543-12.543h15.051l-3.418,12.543H233.56a10.048,10.048,0,0,0-10.034,10.034Zm10.034-5.017a5.017,5.017,0,1,0,0,10.034h2.509l2.734-10.034Zm15.051-16.5v26.534a7.524,7.524,0,0,0,7.526-7.526V155.12A12.53,12.53,0,0,0,248.611,143.637ZM236.069,120a11.289,11.289,0,1,0,11.289,11.289A11.289,11.289,0,0,0,236.069,120Z"
        transform="translate(-215.5 -119.5)"
        stroke="rgba(0,0,0,0)"
        strokeMiterlimit="10"
        strokeWidth="1"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
};
PatientVisitIcon.defaultProps = {
  size: 24
};