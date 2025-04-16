import { useState } from "react";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";

export default function Register() {
  const [role, setRole] = useState("Contractor");

  return (
    <div className="flex items-center justify-center mt-40 bg-white">
      <div className="w-full max-w-xl p-8 space-y-6">
        <h2 className="text-center text-xl font-semibold">Create Account</h2>

        {/* Role Selector */}
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

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Textbox placeholder="First name" />
          <Textbox placeholder="Last name" />
          <Textbox placeholder="Email" />
          <Textbox placeholder="Phone" />
          <Textbox placeholder="Password" type="password" />
          <div className="flex items-end">
            <Button title="Verify Email" className="bg-blue-800 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
