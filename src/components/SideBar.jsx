import { Link, useNavigate } from "react-router-dom";
import image from "../constants/image";
import toast, { Toaster } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
export default function SideBar() {
  const accessToken = localStorage.getItem("accessToken");
  const decodedToken = jwtDecode(accessToken);
  const navigate = useNavigate();

  const Logout = () => {
    if (accessToken) {
      localStorage.removeItem("accessToken");
      toast.success("Logout successfully");
      return navigate("/");
    }
  };

  return (
    <div className="w-[300px] left-0 px-5 border-[1px] fixed h-[100vh] bg-white z-[1000]">
      <div className="w-20 items-center text-center mt-5 text-2xl font-bold text-[#2b00d4]">
        <img className="w-full" src={image.logo} alt="sgroup logo" />
      </div>
      <div>
        <div className="flex flex-col mt-14 gap-6 px-3">
          <div className="flex flex-row items-center gap-4 text-base">
            <Link to={"/home"}>
              <div className="font-medium text-[#bcbcbc]">Dashboard</div>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Link to={`/user/${decodedToken.idUser}`}>
              <div className=" font-medium text-[#bcbcbc]">Profile</div>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-4">
            <button
              onClick={Logout}
              type="submit"
              className="w-full px-4 py-2 text-white bg-primary rounded-lg"
            >
              Logout
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}
