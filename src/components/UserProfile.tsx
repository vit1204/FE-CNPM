import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../apis/user.api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import SideBar from "./SideBar";
function UserProfile() {
  const { id_user } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    email: "",
    username: "",
    gender: "",
    role: "",
  });
  const BE_API = import.meta.env.VITE_BE_API;
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const response = await getUserById(id_user);
      if (response) {
        const user = response[0];
        setUserData({
          ...userData,
          name: user.name,
          age: user.age,
          phone: user.phone,
          address: user.address,
          email: user.email,
          username: user.username,
          gender: user.gender,
          role: user.role,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const updateInfo = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      console.log(userData.name);
      const response = await axios.put(`${BE_API}/api/v1/users/${id_user}`, {
        ...userData,
        name: userData.name,
        age: parseInt(userData.age),
        phone: userData.phone,
        address: userData.address,
        email: userData.email,
        username: userData.username,
        role: userData.role,
        gender: userData.gender,
      });
      if (response.data) {
        console.log(response.data);
        toast.success("Update user successfully");
        return navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SideBar />
      <div className="flex items-center justify-center">
        <form className="space-y-4 mt-3 ">
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
              className="w-full p-2.5 rounded-lg focus:ring-primary-600 border-primary-600"
              required
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
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
              value={userData.gender}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
              name=""
              className="w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600"
              id=""
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Khac">Khac</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-black"
            >
              Role
            </label>
            <select
              value={userData.role}
              onChange={(e) =>
                setUserData({ ...userData, role: e.target.value })
              }
              name=""
              className="bg-w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600"
              id=""
            >
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
              <option value="Customer">Customer</option>
              <option value="Staff">Staff</option>
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
              required
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
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
              required
              value={userData.age}
              onChange={(e) =>
                setUserData({ ...userData, age: e.target.value })
              }
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
              required
              value={userData.address}
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
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
              required
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
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
              required
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>

          <button
            onClick={updateInfo}
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded-lg"
          >
            Update
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
