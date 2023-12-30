import React from 'react';

const LabIcon= ({size}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 47.49 41.418">
      <defs>
        <linearGradient id="a" x1="0.773" y1="1.25" x2="0.227" y2="-0.25" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#6114f8" />
          <stop offset="0.167" stopColor="#6e23f9" />
          <stop offset="1" stopColor="#00b6ff" />
        </linearGradient>
      </defs>
      <path
        className="a"
        d="M45.588,109.155,37.47,94.819l-.518-13.991h.864a.743.743,0,0,0,.691-.691V78.755a.743.743,0,0,0-.691-.691H27.365a.743.743,0,0,0-.691.691v1.382a.743.743,0,0,0,.691.691h.777V94.819L24,102.332l5.441,9.586a6.743,6.743,0,0,1,1.209,3.023H42.565c3.8,0,5.182-2.591,3.023-5.786Zm-16.582,3.109-8.9-15.718-.6-15.287h.95a.774.774,0,0,0,.777-.777V79.014a.774.774,0,0,0-.777-.777H9.056a.774.774,0,0,0-.777.777v1.468a.774.774,0,0,0,.777.777h.864V96.546L1.2,112.178c-2.245,3.455-.691,6.3,3.455,6.3H25.638c4.145,0,5.614-2.764,3.368-6.218ZM12.856,97.323V81.259h3.627l.6,16.064,4.4,8.291H8.8l4.059-8.291Zm18.05-1.814V80.828h3.282l.518,14.682,4.059,7.6H27.105l3.8-7.6Z"
        transform="translate(0.358 -77.564)"
        fill="url(#a)"
      />
    </svg>
  );
};
LabIcon.defaultProps = {
  size: 24,
};
export default LabIcon