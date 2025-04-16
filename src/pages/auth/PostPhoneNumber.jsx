import React from "react";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";

const PostPhoneNumber = () => {
  const location = useLocation();
  const phone = location.state?.phone || "";
  return (
    <div className="flex items-center justify-center mt-40 bg-white">
      <div className="w-full max-w-xl p-8 space-y-6">
        <h2 className="text-center text-xl font-semibold">Create Account</h2>
        <h1 className="text-lg text-center">
          Your email has been verified, continue to phone verification
        </h1>
        <div className="flex justify-center w-max items-center mx-auto">
          <Button
            title={`Send Verification Code to ${phone}`}
            className="bg-[#0B5F94] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default PostPhoneNumber;
