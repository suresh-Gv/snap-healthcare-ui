import React from 'react';

export const RemoveIcon = ({ width = 14, height = 14, color = '#ea4335', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 22 22"
    id="remove"
    {...props}
  >
    <path
      fill={color}
      d="m12.695 10 6.752-6.752a1.887 1.887 0 0 0 0-2.668L19.42.553a1.887 1.887 0 0 0-2.668 0L10 7.305 3.248.553a1.887 1.887 0 0 0-2.668 0L.553.58a1.887 1.887 0 0 0 0 2.668L7.305 10 .553 16.752a1.887 1.887 0 0 0 0 2.668l.027.027a1.887 1.887 0 0 0 2.668 0L10 12.695l6.752 6.752a1.887 1.887 0 0 0 2.668 0l.027-.027a1.887 1.887 0 0 0 0-2.668L12.695 10z"
    ></path>
  </svg>
);