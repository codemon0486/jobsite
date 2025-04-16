import { useState } from "react";

const SearchBoxWithTags = ({ placeholder, tags, setTags, className = "" }) => {
  const [input, setInput] = useState("");

  const addTag = () => {
    if (input && !tags.includes(input)) {
      setTags([...tags, input]);
      setInput("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="space-x-2 flex">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
        className={`border border-blue-500 p-2 rounded-md w-full ${className}`}
      />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 px-1 rounded-full text-xs flex items-center gap-1"
          >
            <p>{tag}</p>
            <button onClick={() => removeTag(idx)}>×</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchBoxWithTags;
