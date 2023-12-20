import axios from "axios";
const Users2 = async ()=>{
    const response = await axios.get("http://localhost:3000/getUsers")
    console.log(response.data);
    return response.data
  }
  export default Users2