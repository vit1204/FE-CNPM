import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<string>("");
  const [name, setName] = useState<string>("");

  const router = useNavigate();

  const handleRegist = async (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/api/v1/auth/register`, {
        email,
        password,
        name,
        username,
        phone,
        age: parseInt(age),
        address,
        gender,
      })
      .then((response) => {
        if (response.data) {
          toast.success("Regist success");
          return router("/");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Regist failed");
      });
  };

  return (
    <section className="flex items-center justify-center pt-5 pb-5  bg-custom-gradient">
      <div className="w-full max-w-md">
        <div className="shadow-2xl rounded-lg bg-surface">
          <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-center text-gray-900">
              Sign up to your account
            </h1>

            <form onSubmit={handleRegist} className="space-y-4">
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-secondary"
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  onKeyUp={(e) => e.key === "Enter" && handleRegist(e)}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  name=""
                  className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  id=""
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Khac">Khac</option>
                </select>
              </div>

              <div className="form-group">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-secondary"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone"
                  className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  onKeyUp={(e) => e.key === "Enter" && handleRegist(e)}
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-secondary"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter your age"
                  className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  onKeyUp={(e) => e.key === "Enter" && handleRegist(e)}
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

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
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-secondary"
                >
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="password"
                  placeholder="Enter your username"
                  className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  onKeyUp={(e) => e.key === "Enter" && handleRegist(e)}
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
              <Toaster position="top-right" reverseOrder={false} />
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
            <Toaster />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
