import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import { verifyEmailCode, resendVerificationCode } from "../../utils/apiUtils";

export default function EmailVerification() {
  const location = useLocation();
  const email = location.state?.email || "";
  const phone = location.state?.phone || "";

  console.log("Email:", email);
  console.log("Phone:", phone);

  const [verificationCode, setVerificationCode] = useState("");

  const handleVerifyCode = async () => {
    try {
      const response = await verifyEmailCode(verificationCode, email);
      alert("Email verified successfully!");
      // Redirect to another page or perform further actions
    } catch (error) {
      alert("Invalid verification code. Please try again.");
    }
  };

  const handleResendCode = async () => {
    try {
      await resendVerificationCode(email);
      alert("Verification code resent! Please check your inbox.");
    } catch (error) {
      alert("Failed to resend verification code. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center mt-40 bg-white">
      <div className="w-full max-w-md p-8 space-y-6">
        <h2 className="text-center text-xl font-semibold">Verify Your Email</h2>
        <h1 className="text-lg text-center">
          Enter the verification code sent to your email
        </h1>
        <div className="flex flex-col w-2/3 gap-6 mx-auto">
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <div className="text-center">
            Didn't get a code?{" "}
            <label
              className="text-blue-500 cursor-pointer"
              onClick={handleResendCode}
            >
              Resend
            </label>
          </div>
          <div className="flex items-center mx-auto">
            <Button
              title="Verify"
              className="bg-[#0B5F94] text-white !px-4"
              onClick={handleVerifyCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
