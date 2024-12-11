import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import "./assets/css/main.scss";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import UserProfile from "./components/UserProfile";
import CreateUser from "./components/CreateUser";
import UserHome from "./components/Home/UserHome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/user/:id_user" element={<UserProfile />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/userHome" element={<UserHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
