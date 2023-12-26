import React from 'react';

export const ResultIcon = ({size}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 42.921 44.725">
      <defs>
        <linearGradient id="linear-gradient" x1="1" y1="1.68" x2="-1.319" y2="-1.387" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#6114f8" />
          <stop offset="0.167" stopColor="#6e23f9" />
          <stop offset="1" stopColor="#00b6ff" />
        </linearGradient>
      </defs>
      <g id="orders_and_results_icon" data-name="orders and results icon" transform="translate(-89.8 -46.9)">
        <path
          id="Path_44"
          data-name="Path 44"
          d="M670.154,661.9a9.956,9.956,0,1,0,9.954,9.954A9.956,9.956,0,0,0,670.154,661.9Zm1.138,10.684v-4.4a1.134,1.134,0,0,0-2.268,0v3.752l-2.372,1.372a1.134,1.134,0,0,0,1.134,1.965l2.933-1.695s.012,0,.016-.008a1.142,1.142,0,0,0,.561-.968l0-.016Z"
          transform="translate(-547.386 -590.187)"
          fillRule="evenodd"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_45"
          data-name="Path 45"
          d="M115.554,91.532H93.96a4.16,4.16,0,0,1-4.16-4.16V51.06a4.16,4.16,0,0,1,4.16-4.16h25.4a4.16,4.16,0,0,1,4.16,4.16V69.466c-.25-.016-.5-.024-.754-.024a12.163,12.163,0,0,0-7.569,2.627,1.354,1.354,0,0,0-.674-.178,1.379,1.379,0,0,0-1.214,2.033,12.224,12.224,0,0,0,2.243,17.607Zm-18.14-9h12a1.134,1.134,0,0,0,0-2.268h-12a1.134,1.134,0,1,0,0,2.268Zm0-8.118h12a1.134,1.134,0,0,0,0-2.268h-12a1.134,1.134,0,1,0,0,2.268Zm17.111-10.64a1.38,1.38,0,1,1-1.38,1.38,1.379,1.379,0,0,1,1.38-1.38ZM97.413,66.291h12a1.134,1.134,0,0,0,0-2.268h-12a1.134,1.134,0,1,0,0,2.268Zm17.111-10.64a1.38,1.38,0,1,1-1.38,1.38A1.379,1.379,0,0,1,114.525,55.651ZM97.413,58.169h12a1.134,1.134,0,0,0,0-2.268h-12a1.134,1.134,0,1,0,0,2.268Z"
          transform="translate(0 0)"
          fillRule="evenodd"
          fill="url(#linear-gradient)"
        />
      </g>
    </svg>
  );
};
ResultIcon.defaultProps = {
  size: 24
};