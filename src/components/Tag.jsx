import React from "react";

const Tags = ({ tags, onRemove }) => {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-[#009DDE] text-white ml-2 px-2 rounded-full flex items-center gap-2"
        >
          {tag}
          <button onClick={() => onRemove(tag)}>&times;</button>
        </span>
      ))}
    </div>
  );
};

export default Tags;
