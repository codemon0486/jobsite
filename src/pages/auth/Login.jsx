import { useState } from "react";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";

export default function Login() {
  const [role, setRole] = useState("Contractor");

  return (
    <div className="flex items-center justify-center mt-40 bg-white">
      <div className="w-full max-w-md p-8 space-y-6">
        <h2 className="text-center text-xl font-semibold">Login</h2>

        {/* Form Grid */}
        <div className="flex flex-col w-2/3 gap-6 mx-auto">
          <Textbox placeholder="Email" />
          <Textbox placeholder="Password" type="password" />
          <div className="flex items-center mx-auto">
            <Button title="Login" className="bg-blue-800 text-white !px-4" />
          </div>
          <div className="text-center mt-2">Forgot Password</div>
        </div>
      </div>
    </div>
  );
}
