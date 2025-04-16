import React from "react";

const DateBox = ({ value, onChange, className = "", ...props }) => (
  <input
    type="date"
    value={value}
    onChange={onChange}
    className={`border border-blue-500 p-2 rounded-md w-full ${className}`}
    {...props}
  />
);

export default DateBox;
