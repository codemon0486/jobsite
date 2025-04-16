import React from "react";
import StarRating from "./StarRating";

const WorkHistoryTable = () => {
  return (
    <div className="relative overflow-x-auto mt-8">
      <table className="w-full text-sm ">
        <thead className="text-[16px] text-gray-800 border-b-2 text-left border-gray-500">
          <tr>
            <th scope="col" className="px-6 py-3">
              Job Title
            </th>
            <th scope="col" className="px-6 py-3">
              Dates
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
            <th scope="col" className="px-6 text-right py-3">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white text-lg bg-[#F1F1F1] ">
            <td className="px-6 py-2">Apple</td>
            <td className="px-6 py-2">Silver</td>
            <td className="px-6 py-2">
              <StarRating />
            </td>
            <td className="px-6 py-2 text-right">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkHistoryTable;
