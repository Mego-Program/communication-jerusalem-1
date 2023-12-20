import axios from "axios";
export const getAllUsers = async ()=>{
    const response = await axios.get("http://localhost:3000/getUsers")
    return response.data
  }
