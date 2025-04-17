import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Button from "../../components/Button";
import { auth } from "../../utils/firebase";

const PostPhoneNumber = () => {
  const location = useLocation();
  const phone = location.state?.phone || "";

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("send"); // "send" or "verify"

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => console.log("reCAPTCHA verified"),
          // Disable app verification for testing
          appVerificationDisabledForTesting: true,
        }
      );
    }
  };

  const handleSendOtp = async () => {
    if (!phone) return alert("Missing phone number");

    setLoading(true);
    console.log("phone:", phone);
    console.log("auth:", auth);

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      window.confirmationResult = confirmation;
      setStep("verify");
    } catch (err) {
      console.error("Failed to send OTP", err);
      alert("Failed to send code. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Enter the code");

    try {
      const result = await window.confirmationResult.confirm(otp);
      const idToken = await result.user.getIdToken();

      await fetch("/api/verify-phone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      alert("Phone verified successfully!");
    } catch (err) {
      console.error("Invalid code", err);
      alert("Incorrect code. Try again.");
    }
  };
  const handleResend = () => {
    setStep("send");
    handleSendOtp();
  };

  // Format phone like (123) 456-7890 (simple example)
  const formattedPhone = phone.replace(
    /(\+\d{1,2})(\d{3})(\d{3})(\d{4})/,
    "$1 ($2) $3 $4"
  );

  return (
    <div className="flex items-center justify-center mt-56 bg-white">
      <div className="w-full max-w-xl p-8 space-y-6 text-center">
        <h2 className="text-xl font-semibold">Create Account</h2>

        {step === "send" && (
          <>
            <p className="text-gray-700">
              Your email has been verified. Continue to phone verification.
            </p>
            <Button
              onClick={handleSendOtp}
              title={loading ? "Sending..." : `Send Code to ${phone}`}
              className="bg-[#0B5F94] text-white disabled:opacity-50"
              disabled={loading}
            />
          </>
        )}

        {step === "verify" && (
          <>
            <p className="text-gray-700">
              Enter the verification code sent to {formattedPhone}
            </p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Verification Code"
              className="border px-4 py-2 rounded w-full"
            />
            <p className="text-sm text-gray-500">
              Didn’t get a code?{" "}
              <button
                onClick={handleResend}
                className="text-blue-600 underline"
              >
                Resend
              </button>
            </p>
            <Button
              onClick={handleVerifyOtp}
              title="Verify"
              className="bg-[#0B5F94] text-white w-full"
            />
          </>
        )}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default PostPhoneNumber;
