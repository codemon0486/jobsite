import React from "react";

const Textbox = ({
  placeholder,
  value,
  onChange,
  name,
  type = "text",
  className = "",
  ...props
}) => (
  <input
    type={type}
    name={name} // Add the name prop for form handling
    placeholder={placeholder}
    value={value}
    onChange={onChange} // Pass the onChange function directly
    className={`border border-[#0B5F94] p-2 rounded-md ${className}`}
    {...props}
  />
);

export default Textbox;
