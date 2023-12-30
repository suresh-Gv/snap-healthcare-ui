import React from 'react';

const WhiteboardIcon = () => {
  return (
    <span className="sh_menuIcon">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 191.598 194.31">
        <defs>
          <linearGradient id="linear-gradient" x1="1.443" y1="1.521" x2="-0.443" y2="-0.249" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#6114f8" />
            <stop offset="0.167" stopColor="#6e23f9" />
            <stop offset="1" stopColor="#00b6ff" />
          </linearGradient>
        </defs>
        <path
          id="Whiteboard_Icon"
          data-name="Whiteboard Icon"
          d="M176.683,62.991l-.5-.5a87.337,87.337,0,0,1-17.473,94.852L174.686,185.3l-14.977,8.986-14.477-24.961A87.924,87.924,0,0,1,95.809,184.8a83.711,83.711,0,0,1-51.42-16.974L28.913,194.287,13.438,185.3,30.91,155.348A86.812,86.812,0,0,1,8.445,96.939a88.444,88.444,0,0,1,6.982-34.43l-.493.484S-15.018,33.537,9.943,9.075c23.963-23.963,52.418,6.989,52.418,6.989l-.5.5A86.642,86.642,0,0,1,96.309,9.575a88.444,88.444,0,0,1,34.43,6.982l-.984-.493s28.456-30.453,51.919-6.989C206.637,34.037,176.683,62.991,176.683,62.991ZM95.31,27.547A68.893,68.893,0,1,0,164.2,96.439,68.894,68.894,0,0,0,95.31,27.547ZM63.36,87.953H87.323V45.519H104.8v59.907H63.36Z"
          transform="translate(-0.01 0.023)"
          fillRule="evenodd"
          fill="url(#linear-gradient)"
        />
      </svg>
    </span>
  );
};

WhiteboardIcon.defaultProps = {
    size: 24
};

export default WhiteboardIcon;