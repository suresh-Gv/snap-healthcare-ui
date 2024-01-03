import React from "react";
import PropTypes from "prop-types";

const CardBody = ({ children, className }) => {
  return (
    <div className={`card-body ${className}`}>
      {children && <>{children}</>}
    </div>
  );
};

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardBody.defaultProps = {
  children: null,
  className: '',
};

export default CardBody;
