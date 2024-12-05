import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

function Home() {
  const token = localStorage.getItem("accessToken");
  const decodeToken = jwtDecode(token);
  console.log(decodeToken);
  const navigate = useNavigate();

  const Logout = () => {
    if (token) {
      localStorage.removeItem("accessToken");
      toast.success("Logout success", {
        duration: 3000,
        position: "top-right",
      });
      return navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="mb-10">
          Welcome <span className="text-red-300">{decodeToken.username}</span>{" "}
          this is home page
        </div>
        <p>your role is: {decodeToken.role}</p>

        <button
          className="block w-full bg-primary mb-4 text-white rounded-lg p-2"
          onClick={Logout}
        >
          Logout
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default Home;
