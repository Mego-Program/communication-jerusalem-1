
import React from "react";
import MyTabs from "./components/myTabs";
import { Box } from "@mui/system"

function App() {

  return (
    <>
      <Box
        sx={{
            display: 'flex',
        }}>
        <MyTabs/>   
      </Box>
    </>
  )}

export default App;
