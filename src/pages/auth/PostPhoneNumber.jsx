import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../utils/firebase"; // Adjust the import path as necessary
import Button from "../../components/Button";

const PostPhoneNumber = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const phone = location.state?.phone || "";
  const [loading, setLoading] = useState(false);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            console.log("reCAPTCHA verified");
          },
        },
        auth
      );
    }
  };

  const handleSendOtp = async () => {
    if (!phone) {
      alert("Phone number is missing.");
      return;
    }

    setLoading(true);
    setupRecaptcha();

    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      window.confirmationResult = confirmation;
      alert("OTP sent to your phone!");

      navigate("/verify-otp", { state: { phone } });
    } catch (error) {
      console.error("Failed to send OTP", error);
      alert("Failed to send OTP. Check phone format or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-40 bg-white">
      <div className="w-full max-w-xl p-8 space-y-6">
        <h2 className="text-center text-xl font-semibold">Create Account</h2>
        <h1 className="text-lg text-center text-gray-700">
          Your email has been verified. Continue to phone verification.
        </h1>

        <div className="flex justify-center w-max items-center mx-auto">
          <Button
            onClick={handleSendOtp}
            title={loading ? "Sending..." : `Send Code to ${phone}`}
            className="bg-[#0B5F94] text-white disabled:opacity-50"
            disabled={loading}
          />
        </div>

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default PostPhoneNumber;
