import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, ...props }) => (
  <button className="button" onClick={onClick} {...props}>
    <span>{props.children}</span>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
