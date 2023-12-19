import React from "react";
import ChatView from "./components/ChatView";
import { Box } from "@mui/system";

import AllUsers from "remotAllUsers/AllUsers";

const remoteMessage = (
  <>
    <Box>
      <ChatView />
    </Box>
  </>
);
function App() {
  const fetchUsers = async () => {
    try {
      const users = await AllUsers();
      console.log(users);
    } catch (error) {
      console.error(error);
    }
  };
  fetchUsers();
  return remoteMessage;
}

export default App;
