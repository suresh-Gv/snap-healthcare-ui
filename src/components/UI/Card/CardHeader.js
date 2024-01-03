import React from "react";
import PropTypes from "prop-types";

const CardHeader = ({ title, children, className }) => {
  return (
    <div className={`card-header ${className}`}>
      {title && <h5 className="card-title">{title}</h5>}
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  title: '',
  children: null,
  className: '',
};

export default CardHeader;
