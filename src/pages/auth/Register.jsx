import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";
import { sendVerificationEmail } from "../../utils/apiUtils";

export default function Register() {
  const [role, setRole] = useState("Contractor");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleVerifyEmail = async () => {
    try {
      const data = await sendVerificationEmail(formData, role);
      navigate("/email_verification", {
        state: { email: formData.email, phone: formData.phone },
      }); // Redirect to email verification page
      alert("Email verification sent! Please check your inbox.");
    } catch (error) {
      alert("An error occurred while sending the verification email.");
    }
  };

  return (
    <div className="flex items-center justify-center mt-40 bg-white">
      <div className="w-full max-w-xl p-8 space-y-6">
        <h2 className="text-center text-xl font-semibold">Create Account</h2>
        <div className="flex justify-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="Contractor"
              checked={role === "Contractor"}
              onChange={(e) => setRole(e.target.value)}
            />
            Contractor
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="Client"
              checked={role === "Client"}
              onChange={(e) => setRole(e.target.value)}
            />
            Client
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Textbox
            placeholder="First name"
            name="firstName"
            onChange={setFormData}
            value={formData.firstName}
            formData={formData}
          />
          <Textbox
            placeholder="Last name"
            name="lastName"
            onChange={setFormData}
            value={formData.lastName}
            formData={formData}
          />
          <Textbox
            placeholder="Email"
            name="email"
            onChange={setFormData}
            value={formData.email}
            formData={formData}
          />
          <Textbox
            placeholder="Phone"
            name="phone"
            onChange={setFormData}
            value={formData.phone}
            formData={formData}
          />
          <Textbox
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={setFormData}
            formData={formData}
          />
          <div className="flex items-center w-max" onClick={handleVerifyEmail}>
            <Button
              title="Verify Email"
              className="bg-[#0B5F94] text-white !px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
