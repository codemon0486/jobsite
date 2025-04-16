import React from "react";

const Tag = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="bg-[#009DDE] text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
        <p>Skil1</p>
        <button>×</button>
      </span>
    </div>
  );
};

export default Tag;
