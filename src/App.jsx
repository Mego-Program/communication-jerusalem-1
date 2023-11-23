import React from "react";
import ChatView from "./components/ChatView";
import { Box } from "@mui/system";


export const routeMessage = (
  <>
    <Box>
      <ChatView />
    </Box>
  </>
);

function App() {
  return routeMessage;
}

export default App;
