import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const history = useNavigate();

  const handleRegist = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/auth/register`,
        {
          email,
          password,
          address,
        }
      );
      if (response.status === 200) {
        history("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-custom-gradient">
      <div className="w-full max-w-md">
        <div className="shadow-2xl rounded-lg bg-surface">
          <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-center text-gray-900">
              Sign up to your account
            </h1>

            <form onSubmit={handleRegist} className="space-y-4">
              <div className="form-group">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-secondary"
                >
                  Address
                </label>
                <input
                  type="address"
                  name="addresss"
                  id="password"
                  placeholder="Enter your address"
                  className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  onKeyUp={(e) => e.key === "Enter" && handleRegist(e)}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
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
                  placeholder="Email"
                  onKeyUp={(e) => e.key === "Enter" && handleRegist(e)}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-secondary"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  onKeyUp={(e) => e.key === "Enter" && handleRegist(e)}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                onClick={handleRegist}
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary rounded-lg"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-secondary">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-primary hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
