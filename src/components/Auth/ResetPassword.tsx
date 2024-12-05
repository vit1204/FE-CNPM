import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ResetPassword = () => {
  const [passwordNew, setPasswordNew] = useState("");
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const API_BE = import.meta.env.VITE_BE_API;
  const navigate = useNavigate();

  const resetPass = async (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post(`${API_BE}/api/v1/auth/reset-password?token=${token}`, {
        passwordNew,
      })
      .then((response) => {
        if (response.data) {
          toast.success("Reset password successfully", {
            duration: 3000,
            position: "top-right",
          });
          return navigate("/");
        } else {
          toast.error("Reset password unsuccessfully. Please try again");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Reset password unsuccessfully. Please try again");
      });
  };

  return (
    <section className="flex items-center justify-center h-screen bg-background">
      <div className="w-full max-w-md">
        <div className="border-2 border-gray-700 rounded-lg shadow bg-surface">
          <div className="p-6 space-y-4">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="passwordNew"
                  className="block mb-2 text-sm font-medium text-secondary"
                >
                  New password
                </label>
                <input
                  type="password"
                  name="passwordNew"
                  id="passwordNew"
                  className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-secondary"
                  required
                  value={passwordNew}
                  onChange={(e) => setPasswordNew(e.target.value)}
                />
              </div>
              <button
                onClick={resetPass}
                type="submit"
                className="block w-full bg-primary mb-4 text-white rounded-lg p-2"
              >
                Send
              </button>
              <Toaster position="top-right" reverseOrder={false} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
