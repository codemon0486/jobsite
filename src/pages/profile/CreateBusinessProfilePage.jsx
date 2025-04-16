import React, { useState } from "react";
import Textbox from "../../components/Textbox";
import SelectBox from "../../components/SelectBox";
import SearchBoxWithTags from "../../components/SearchBoxWithTags";
import Button from "../../components/Button";
import JobItem from "../../components/JobItem";

const CreateBusinessProfilePage = () => {
  const [specialization, setSpecialization] = useState([
    "specialization 1",
    "specialization 2",
  ]);
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6">
      <div className=" items-center w-full py-4 border-b border-[#009DDE]">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="/images/Logo.svg"
            alt="Avatar"
            className="rounded-full w-16 h-16 border border-[#009DDE]"
          />
          <Textbox placeholder="Company Name" className="w-1/3" />
        </div>
        <Textbox placeholder="Company overview" className="w-full" />
      </div>
      <div className="border-b border-[#009DDE] gap-20 flex w-2/3 pb-6 mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Location</h2>
        </div>
        <div className="flex w-full flex-col gap-4">
          <SelectBox
            options={["USA", "Canada", "Mexico"]}
            placeholder="Country"
          />
          <div className="flex gap-2">
            <Textbox placeholder="Address 1" className="w-full" />
            <Textbox placeholder="Address 2" className="w-full" />
          </div>
          <div className="flex gap-2">
            <SearchBoxWithTags
              placeholder="Expertise"
              tags={[]}
              setTags={() => {}}
              className="w-full"
            />
            <SelectBox options={["TX", "AT", "FL"]} className="w-1/5" />
            <Textbox placeholder="Zip Code" className="w-2/5" />
          </div>
          <Button
            title="Add Location"
            className="bg-blue-800 text-white w-1/3"
          />
        </div>
      </div>
      <div className="border-b border-[#009DDE] gap-12 flex w-2/3 pb-6 mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Information</h2>
        </div>
        <div className="flex w-full flex-col gap-4">
          <SelectBox
            options={["Healthcare", "Education", "Finance"]}
            placeholder="Country"
            className="w-1/2"
          />
          <SelectBox
            options={["1-5", "5-10", "10-100"]}
            placeholder="Country"
            className="w-1/2"
          />
          <SearchBoxWithTags
            placeholder="Specialization"
            tags={specialization}
            setTags={setSpecialization}
            className="w-1/2"
          />
        </div>
      </div>
      <JobItem />
    </div>
  );
};

export default CreateBusinessProfilePage;
