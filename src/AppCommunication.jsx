import React from "react";
import ChatView from "./components/ChatView";
import { Box } from "@mui/system";
import me from "./components/me";
import Users2 from "./components/Users2";
const remoteMessage = (
  <>
    <Box>
      <ChatView />
    </Box>
  </>
);
function App() {
  me()
  Users2()
  return remoteMessage;
}

export default App;
