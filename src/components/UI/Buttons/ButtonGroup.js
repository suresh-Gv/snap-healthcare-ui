import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ButtonGroup = ({ buttons }) => {
  return (
    <div className="btn-group">
      {buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default ButtonGroup;
