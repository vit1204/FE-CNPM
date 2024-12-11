import { useState } from "react";
import image from "../constants/image";
import { jwtDecode } from "jwt-decode";

export default function UserItem({ user, deleteUser, editUser }) {
  const [isClick, setIsClick] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const decodedToken = jwtDecode(accessToken);

  return (
    <>
      <tr>
        <td className="py-4">
          <div className="flex items-center">
            <img className="w-14 rounded-full" alt="avatar" src={image.ava} />
            <div className="mx-3">
              <p> {user.name} </p>
              <b> {user.email} </b>
            </div>
          </div>
        </td>
        <td className="px-3"> {user.age} </td>
        <td>
          <span className="rounded py-2  px-4">{user.gender}</span>
        </td>

        <td className="px-4"> {user.role} </td>

        {decodedToken.role.toLowerCase() === "admin" && (
          <td className="relative">
            <button
              onClick={() => setIsClick(!isClick)}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-500 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Actions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              data-display="none"
              className={`popup absolute right-0 w-32 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none ${
                isClick ? "" : "hidden"
              }`}
            >
              <div className="px-1 py-1 popup">
                <button
                  onClick={() => editUser(user.id)}
                  className="popup hover:bg-gray-400 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="popup w-5 h-5 mr-2 text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                  </svg>
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="popup hover:bg-red-400 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="popup w-5 h-5 mr-2 text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </td>
        )}
      </tr>
    </>
  );
}
