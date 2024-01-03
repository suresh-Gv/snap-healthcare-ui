import React from "react";
import PropTypes from "prop-types";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";


const Card = ({ title, children, className }) => {
  return (
    <div className={`card ${className}`}>
      {title && <CardHeader title={title} />}
      {children && <CardBody>{children}</CardBody>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  title: '',
  children: null,
  className:'',
};



Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
