import "./Login.scss";
import Icons from "../../constants/icon.js";
import Images from "../../constants/image.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        const accesToken = response.data.result.accessToken;
        localStorage.setItem("accessToken", accesToken);
        router("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container_wrapper">
      <div className="container" id="container">
        <div className="form-container sign-in">
          <form action="home.html">
            <h1 className="text-2xl ">SIGN IN</h1>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Name"
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
              <p> Don't have an account? Register</p>
            </Link>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
        <div className="toggle-container">
          <img src={Images.loginAva} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
