import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import validator from "validator";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const API_BE = import.meta.env.VITE_BE_API; // Giả sử bạn có biến môi trường cho API
  const navigate = useNavigate();
  const validateEmail = () => {
    setIsEmailValid(validator.isEmail(email));
  };

  const resetPass = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isEmailValid) return;

    axios
      .post(`${API_BE}/api/v1/auth/forgot-password`, { email })
      .then((response) => {
        if (response.data) {
          toast.success("Send email successfully. Please check your email", {
            duration: 3000,
            position: "top-right",
          });
          return navigate("/");
        } else {
          toast.error("Send email unsuccessfully. Please try again", {
            duration: 3000,
            position: "top-right",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Send email unsuccessfully. Please try again", {
          duration: 3000,
          position: "top-right",
        });
      });
  };

  return (
    <section className="bg-background flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <div className="bg-surface rounded-lg shadow-2xl">
          <div className="p-6 space-y-4">
            <h1 className="text-lg leading-tight tracking-tight text-gray-900">
              Enter the email address associated with your account and we'll
              send a link to reset your password
            </h1>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-secondary"
                  required
                  onBlur={validateEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!isEmailValid && (
                  <span className="text-red-500">Invalid email format</span>
                )}
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

export default ForgotPassword;
