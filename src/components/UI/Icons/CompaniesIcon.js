import React from 'react';
export const CompaniesIcon = (props) => {
  console.log('compannie icon size',props.size);
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={props.size}
          height={props.size}
          viewBox="0 0 52.001 45.646"
        >
          
          <defs>
            <linearGradient
              id="a"
              x1="0.773"
              y1="1.25"
              x2="0.227"
              y2="-0.25"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#6114f8" />
              <stop offset="0.167" stopColor="#6e23f9" />
              <stop offset="1" stopColor="#00b6ff" />
            </linearGradient>
          </defs>
          <path
            d="M49.4,22.325H42.478V44.472H29.149V30.229H20V44.472H6.912V22.325H0L24.7,0l9.873,8.894V5.4h6.175v9.11Z"
            transform="translate(1.299 0.673)"
            stroke="rgba(0,0,0,0)"
            strokeMiterlimit="10"
            strokeWidth="1"
            fillRule="evenodd"
            fill="url(#a)"
          />
        </svg>
      </>
    );
  };
  CompaniesIcon.defaultProps ={
    size:24
}
  