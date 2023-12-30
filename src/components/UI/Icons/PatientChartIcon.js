import React from 'react';

const PatientChatIcon = ({size}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 196.204 190.44">
      <defs>
        <linearGradient id="linear-gradient" x1="1.344" y1="1.68" x2="-0.403" y2="-0.589" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#6114f8" />
          <stop offset="0.167" stopColor="#6e23f9" />
          <stop offset="1" stopColor="#00b6ff" />
        </linearGradient>
      </defs>
      <g id="medical-chart-folder" transform="translate(-45.14 -61.393)">
        <path
          id="Path_42"
          data-name="Path 42"
          d="M220.207,338.871h-68L140.684,317.49A13.133,13.133,0,0,0,129.11,310.6H58.29a13.163,13.163,0,0,0-13.15,13.15V435.85a21.145,21.145,0,0,0,21.105,21.137H220.207a21.16,21.16,0,0,0,21.137-21.137V359.976a21.145,21.145,0,0,0-21.137-21.105M174.659,408.7h-22.41v22.41H134.236V408.7h-22.41V390.684h22.41v-22.41h18.013v22.41h22.41Z"
          transform="translate(0 -205.154)"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_43"
          data-name="Path 43"
          d="M239.72,111.217l10.888,20.154h66.577a1.076,1.076,0,0,1,.312.031V71.658a10.3,10.3,0,0,0-10.3-10.264H173.233a10.294,10.294,0,0,0-10.264,10.264V103.1h63.117a15.467,15.467,0,0,1,13.634,8.112m17.955-18.6h15.2v-15.2H285.1v15.2h15.2v12.217H285.1v15.2H272.875v-15.2h-15.2ZM179.083,75.155h66.826a1.17,1.17,0,0,1,0,2.34H179.083a1.17,1.17,0,0,1,0-2.34M177.913,88.47a1.17,1.17,0,0,1,1.17-1.17h66.826a1.17,1.17,0,0,1,0,2.34H179.083a1.17,1.17,0,0,1-1.171-1.17"
          transform="translate(-96.998)"
          fill="url(#linear-gradient)"
        />
      </g>
    </svg>
  );
};
PatientChatIcon.defaultProps = {
  size:24 
};
export default PatientChatIcon