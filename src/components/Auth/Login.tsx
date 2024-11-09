import { useState } from "react";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../../constants/icon.js";
import Images from "../../constants/image.js";

function Login() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="container_wrapper">
      <div className={`container ${isActive ? "active" : ""}`} id="container">
      
        <div className="form-container sign-in">
          <form action="home.html">
            <h1 className="text-2xl ">SIGN IN</h1>
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <span>or use</span>
            <div className="social-container">
              <img  src={Icons.facebook} alt="" />
              <img  src={Icons.instagram} alt="" />
              <img src={Icons.google} alt="" />
            </div>
            <button>Login</button>
            <p  id="register" onClick={toggleActive}>
              create an account
            </p>
            <p>Forgot password</p>
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

