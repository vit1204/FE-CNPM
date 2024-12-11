import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import SideBar from "../SideBar";
import { useEffect, useState } from "react";
import { getAllUser } from "../../apis/user.api";
import axios from "axios";
import UserItem from "../UserItem";

const BE_API = import.meta.env.VITE_BE_API;

function Home() {
  const token = localStorage.getItem("accessToken");
  const decodeToken = jwtDecode(token);
  console.log(decodeToken.idUser);
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const column = ["Info", "Age", "Gender", "Role"];

  const fetchUser = async () => {
    try {
      const response = await getAllUser();
      if (response) {
        if (decodeToken.role.toLowerCase() === "admin") {
          const filterdUser = response.filter(
            (user) => user.id_user !== decodeToken.idUser
          );
          setUserData(filterdUser);
        } else {
          const filterdRole = response.filter(
            (user) => user.role.toLowerCase() !== "admin"
          );
          setUserData(filterdRole);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${BE_API}/api/v1/users/${id}`);
      if (response.data) {
        toast.success(response.data.message);
        fetchUser();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = (id) => {
    return navigate(`/user/${id}`);
  };

  return (
    <div>
      <SideBar />
      <div className="flex items-center justify-end ">
        <button
          onClick={() => {
            return navigate("/user/create");
          }}
          type="button"
          className="flex justify-end px-4  mt-[20px] ml-[60px] py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Thêm Mới
        </button>
      </div>

      <div className="flex justify-center items-center">
        <table className="mt-[60px]">
          <thead className="text-xs text-gray-700 uppercase py-4 bg-white">
            <tr className="px-6 py-3 bg-white">
              {column.map((item, index) => {
                return (
                  <th key={index} className="px-5">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <UserItem
                key={user.id}
                user={user}
                deleteUser={() => deleteUser(user.id_user)}
                editUser={() => editUser(user.id_user)}
              />
            ))}
            <Toaster position="top-right" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
