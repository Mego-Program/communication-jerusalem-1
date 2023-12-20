import axios from "axios"

const users = async ()=>{
  const response = await axios.get("http://localhost:3000/getUsers")
  console.log(response);
  return response
}

export default users