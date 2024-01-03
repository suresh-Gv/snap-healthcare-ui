import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ButtonList = ({ buttonList }) => {
  return (
    <>
      {buttonList.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </>
  );
};

ButtonList.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default ButtonList;
