import React from "react";
import PropTypes from "prop-types";

const RadioButtons = ({ items, ...props }) => (
  <div {...props}>
    {items.map((item) => (
      <div key={item.id}>
        <input
          type="radio"
          name="radio"
          value={item.value}
          onChange={item.onChange}
          required
        />
        <label />
        <div>{item.label}</div>
      </div>
    ))}
  </div>
);

RadioButtons.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.number,
  label: PropTypes.string,
};

export default RadioButtons;
