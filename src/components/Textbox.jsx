import React from "react";

const Textbox = ({
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
  ...props
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`border border-blue-500 p-2 rounded-md w-full ${className}`}
    {...props}
  />
);

export default Textbox;
