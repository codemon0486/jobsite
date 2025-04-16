import React from "react";

const DateBox = ({ value, onChange, className = "", ...props }) => (
  <input
    type="date"
    value={value}
    onChange={onChange}
    className={`border border-[#0B5F94] p-2 rounded-md ${className}`}
    {...props}
  />
);

export default DateBox;
