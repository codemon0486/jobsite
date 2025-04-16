export const sendVerificationEmail = async (formData, role) => {
  try {
    const response = await fetch(
      "https://freelancer-backend-production-9e6b.up.railway.app/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, role }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to send verification email.");
    }
    const data = await response.json();
    return data; // Return the response data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};

export const verifyEmailCode = async (verificationCode, email) => {
  const response = await fetch("https://freelancer-backend-production-9e6b.up.railway.app/api/auth/verify-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ verificationCode, email }),
  });

  return response; // Return the raw response to handle it in the component
};

export const resendVerificationCode = async (email) => {
  try {
    const response = await fetch(
      "https://freelancer-backend-production-9e6b.up.railway.app/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to resend verification code.");
    }

    const data = await response.json();
    return data; // Return the response data if needed
  } catch (error) {
    console.error("Error resending code:", error);
    throw error;
  }
};
