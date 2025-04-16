import React from "react";

const Textbox = ({
  placeholder,
  value,
  onChange,
  formData,
  type = "text",
  className = "",
  ...props
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange({ ...formData, [e.target.name]: e.target.value })}
    className={`border border-[#0B5F94] p-2 rounded-md ${className}`}
    {...props}
  />
);

export default Textbox;
