import { useState } from "react";
import { useLocation } from "react-router-dom";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";
import { verifyEmailCode, resendVerificationCode } from "../../utils/apiUtils";

export default function EmailVerification() {
  const location = useLocation();
  const email = location.state?.email || "";
  const phone = location.state?.phone || "";
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerifyCode = async () => {
    try {
      const response = await verifyEmailCode(verificationCode, email);
      navigate("/submit_phoneNumber", {
        state: { phone: phone },
      });
      alert("Email verified successfully!");
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
      <div className="w-full max-w-xl p-8 space-y-6">
        <h2 className="text-center text-xl font-semibold">Create Account</h2>
        <h1 className="text-lg text-center">
          Enter the verification code sent to {email}
        </h1>
        <div className="flex flex-col w-2/3 gap-6 mx-auto">
          <Textbox
            placeholder="Verification Code"
            name="verificationCode"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
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
          <div
            className="flex items-center mx-auto w-max"
            onClick={handleVerifyCode}
          >
            <Button title="Verify" className="bg-[#0B5F94] text-white !px-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
