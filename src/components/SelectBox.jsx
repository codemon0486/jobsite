import React from "react";

const SelectBox = ({ options, value, onChange, className = "", ...props }) => (
  <select
    value={value}
    onChange={onChange}
    className={`border border-blue-500 p-2 rounded-md w-full ${className}`}
    {...props}
  >
    {options.map((opt, idx) => (
      <option key={idx} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default SelectBox;
