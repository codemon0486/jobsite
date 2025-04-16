import React from "react";

const Header = () => {
  return (
    <div className="w-full border-b-2 border-[#0B5F94]">
      <div className="max-w-7xl mx-auto ">
        <header className="bg-white shadow-sm py-3 px-6 flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <img src="/images/Logo.svg" alt="Logo" className="w-16 h-18" />
          </div>

          <h1 className="text-xl font-semibold text-gray-800">
            Create Public Profile
          </h1>

          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
              KD
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
