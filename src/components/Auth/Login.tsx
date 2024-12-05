import "./Login.scss";
import Icons from "../../constants/icon.js";
import Images from "../../constants/image.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/api/v1/auth/login`, {
        username,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          const accessToken = response.data.data;
          localStorage.setItem("accessToken", accessToken);
          toast.success("Login success", {
            duration: 3000,
            position: "top-right",
          });
          return router("/home");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid username or password", {
          duration: 3000,
          position: "top-right",
        });
      });
  };
  return (
    <div className="container_wrapper">
      <div className="container" id="container">
        <div className="form-container sign-in">
          <form action="home.html">
            <h1 className="text-2xl ">SIGN IN</h1>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <div className="social-container">
              <img src={Icons.facebook} alt="" />
              <img src={Icons.instagram} alt="" />
              <img src={Icons.google} alt="" />
            </div>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "black",
                padding: 0,
                margin: 0,
              }}
            >
              <p>
                {" "}
                Don't have an account?{" "}
                <span className="text-blue-500 p-0 m-0">Register</span>{" "}
              </p>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                padding: 0,
                margin: 0,
              }}
              to="/forgot-password"
            >
              <p>Forgot password?</p>
            </Link>
            <button onClick={handleLogin}>Login</button>
            <Toaster position="top-right" reverseOrder={false} />
          </form>
        </div>
        <div className="toggle-container">
          <img src={Images.loginAva} alt="" />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
