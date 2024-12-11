import axios from "axios";

const BE_API = import.meta.env.VITE_BE_API;

export const getAllUser = async () => {
  try {
    const response = await axios.get(`${BE_API}/api/v1/users`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BE_API}/api/v1/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (data) => {
  try {
    const response = await axios.put(`${BE_API}/api/v1/users/$`, {
      data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
