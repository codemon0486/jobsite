import React from "react";

const JobItem = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 py-4 border-b border-[#CCCCCC] bg-white">
        <div className="flex justify-between items-center">
          <div className="text-[#808080] text-xs">Date</div>
          <span className="text-xs px-2 py-1 rounded-full text-white bg-[#009DDE]">
            Proposals
          </span>
        </div>
        <div className="text-xs">Job category</div>
        <h3 className="text-lg font-semibold">Job Title</h3>
        <div className="flex items-center gap-6 text-xs">
          <p className="flex items-center gap-1">
            <img src="/images/watch.svg" alt="watch" width={8} />
            Hourly | $75 | Full-time{" "}
          </p>
          <p className="flex items-center gap-1">
            <img src="/images/location.svg" alt="location" width={10} />
            Washington D.C. | Hybrid
          </p>
        </div>
        <p className="text-sm">Job Description</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs px-2 py-1 rounded-full text-white bg-[#009DDE]">
            Category
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
