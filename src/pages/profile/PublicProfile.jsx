import React from "react";
import Tag from "../../components/Tag";
import WorkHistoryTable from "../../components/WorkHistoryTable";
import StarRating from "../../components/StarRating";
import Button from "../../components/Button";

const PublicProfile = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex">
          <div className="flex items-center w-2/5 gap-4 mb-4">
            <img
              src="/images/Logo.svg"
              alt="Avatar"
              className="rounded-full w-16 h-16 border border-[#009DDE]"
            />
            <div>
              <h2 className="text-lg font-semibold">John K.</h2>
              <h2 className="text-sm font-semibold">Profession</h2>
              <h2 className="text-sm font-semibold">Location</h2>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between mb-4">
              <h1 className="text-lg text-[#0B5F94]">Title</h1>
              <div>
                <StarRating />
              </div>
            </div>
            <Tag />
          </div>
        </div>
        <div className="mt-6">Overview</div>
        <h1 className="text-[16px] font-medium py-6">Proposed Rate:</h1>
        <h1 className="text-[16px] font-medium">Work History</h1>
        <WorkHistoryTable />
      </div>
      <div className="w-full justify-center bg-[#E1F5FD]  gap-6 flex border-t py-10 mt-6 border-gray-400">
        <Button title="Back" className="bg-white text-blue-800" />
        <Button title="Short List" className="bg-white text-blue-800" />
        <Button title="Message" className="bg-white text-blue-800" />
        <Button title="Hire" className="bg-blue-800 text-white" />
      </div>
    </>
  );
};

export default PublicProfile;
