import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";
import { sendVerificationEmail } from "../../utils/apiUtils";
import { validateRegistrationForm } from "../../utils/validationUtils"; // Import validation function

export default function Register() {
  const [role, setRole] = useState("Contractor");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVerifyEmail = async () => {
    const errors = validateRegistrationForm(formData);

    if (Object.keys(errors).length > 0) {
      // Display errors to the user
      alert(Object.values(errors).join("\n"));
      return;
    }

    try {
      const data = await sendVerificationEmail(formData, role);
      alert("Email verification sent! Please check your inbox.");
      navigate("/email_verification", {
        state: { email: formData.email, phone: formData.phone },
      });
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
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <Textbox
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <Textbox
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Textbox
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <Textbox
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
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
