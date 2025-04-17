import React, { useState } from "react";
import Tags from "./Tag";

const SearchBox = ({ placeholder, tags, setTags, suggestions, className }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on input
    if (value.trim()) {
      const matches = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(matches);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (!tags.includes(suggestion)) {
      setTags([...tags, suggestion]);
    }
    setInputValue("");
    setFilteredSuggestions([]);
  };

  const handleTagRemove = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className={`relative`}>
      {/* Input field */}
      <div className="flex items-center w-full">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          className={`border border-[#0B5F94] px-4 py-2 rounded-md ${className}`}
        />

        {/* Tags next to the input */}
        <Tags tags={tags} onRemove={handleTagRemove} />
      </div>

      {/* Suggestions dropdown */}
      {filteredSuggestions.length > 0 && (
        <ul
          className={`absolute bg-white border mt-1 max-h-40 overflow-y-auto ${className} z-10`}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
