import React from "react";
import ChatView from "./components/ChatView";
import { Box } from "@mui/system";
import me from "./components/me";
const remoteMessage = (
  <>
    <Box>
      <ChatView />
    </Box>
  </>
);
function App() {
  me()
  return remoteMessage;
}

export default App;
