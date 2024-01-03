import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
// import Buttons from "../Buttons";

const DropdownButton = ({ icon, menuItems, buttonClassName, menuClassName }) => {
  return (
    <div className={`btn-group ${buttonClassName}`}>
      <button
        className="btn btn-outline-secondary dropdown-toggle no-arrow"
        data-bs-toggle="dropdown"
      >
        <span className="dropdown-toggle">{icon}</span>
        <div className={`dropdown-menu ${menuClassName}`} aria-labelledby="dropdownMenuButton">
          {menuItems.map((item, index) => (
            // <Button {...item} key={index} className="dropdown-item"/>
            <a key={index} className="dropdown-item" href={item.href}>
              <i className={`fas ${item.icon} fa-sm fa-fw mr-2 text-gray-400`}></i>
              {item.label}
            </a>
          ))}
        </div>
      </button>
    </div>
  );
};

DropdownButton.propTypes = {
  icon: PropTypes.node.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  buttonClassName: PropTypes.string,
  menuClassName: PropTypes.string,
};

DropdownButton.defaultProps = {
  buttonClassName: "",
  menuClassName: "",
};

export default DropdownButton;
