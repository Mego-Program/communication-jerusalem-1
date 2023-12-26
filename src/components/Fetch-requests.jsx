import axios from "axios";
export const getAllUsers = async () => {
  const response = await axios.get("https://communication-1-server.onrender.com/getUsers");
  console.log(response.data);
  return response.data;
};
