import { useState } from "react";
import Textbox from "../../components/Textbox";
import SearchBox from "../../components/SearchBox";
import SelectBox from "../../components/SelectBox";
import DateBox from "../../components/DateBox";
import Button from "../../components/Button";
import {
  skillSuggestions,
  expertiseSuggestions,
  certSuggestions,
  departmentExperienceLevels,
} from "../../data/selectOptions";

export default function CreatePublicProfilePage() {
  const [skills, setSkills] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [certs, setCerts] = useState([]);

  return (
    <>
      <div className="max-w-5xl mx-auto p-8 space-y-6">
        <div className="flex items-center w-full space-x-4 py-4 border-b border-[#009DDE]">
          <img
            src="/images/Logo.svg"
            alt="Avatar"
            className="rounded-full w-16 h-16 border border-[#009DDE]"
          />
          <div>
            <h2 className="text-xl font-semibold">Name Lastname</h2>
          </div>
        </div>
        <div className="border-b border-[#009DDE] pb-6">
          <Textbox placeholder="About Me/Bio" className="w-full" />
        </div>
        <div className="flex flex-col gap-4 pb-6 border-b border-[#009DDE]">
          <Textbox placeholder="Rate per hour" className="w-1/3" />
        </div>
        <div className="flex flex-col gap-4 pb-6 border-b border-[#009DDE]">
          <Textbox placeholder="Primary position/Title" className="w-1/3" />
          <SearchBox
            placeholder="Skills"
            tags={skills}
            setTags={setSkills}
            suggestions={skillSuggestions}
            className="w-1/3"
          />
          <SearchBox
            placeholder="Expertise"
            tags={expertise}
            setTags={setExpertise}
            suggestions={expertiseSuggestions}
            className="w-1/3"
          />
        </div>
        <SearchBox
          placeholder="Certifications"
          tags={certs}
          setTags={setCerts}
          suggestions={certSuggestions}
          className="w-1/3"
        />

        {/* Work History */}
        <div className="space-y-4">
          <h3 className="text-md font-semibold">Work History</h3>

          <Textbox placeholder="Title" className="w-2/3" />

          <div className="flex gap-8 items-center w-full">
            <Textbox placeholder="Department/Agency" className="w-1/3" />
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2 ">
                <input type="radio" name="govType" value="State" /> State
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="govType" value="Federal" /> Federal
              </label>
            </div>
            <SelectBox options={departmentExperienceLevels} className="w-1/3" />
          </div>

          <Textbox placeholder="Location" className="w-1/3" />

          <div className="flex gap-4">
            <DateBox className="w-1/3" />
            <DateBox className="w-1/3" />
          </div>
          <Button title="Add More" className="bg-[#0B5F94] text-white" />
        </div>

        {/* Degrees */}
        <div className="space-y-4">
          <h3 className="text-md font-semibold">Degrees</h3>

          <div className="flex w-full gap-4">
            <Textbox placeholder="Degree" className="w-full" />
            <Textbox placeholder="Institution" className="w-full" />
            <DateBox placeholder="Year Completed" className="w-full" />
            <Button
              title="Add More"
              className="bg-[#0B5F94] w-1/3 text-white"
            />
          </div>
        </div>
      </div>
      <div className="w-full justify-center bg-[#E1F5FD] gap-6 flex border-t py-6 border-gray-400">
        <Button title="Cancel" className="bg-white text-[#0B5F94]" />
        <Button
          title="Preview Public Profile"
          className="bg-white text-[#0B5F94]"
        />
        <Button title="Save" className="bg-[#0B5F94] text-white" />
      </div>
    </>
  );
}
