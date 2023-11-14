
import React from "react";
import Grid from "@mui/material/Grid";
import MyTabs from "./components/myTabs";
import { Box } from "@mui/system"
import ChatHistory from "./components/chatHistory";
import Profile from './components/Profile/Profile'
import { Paper } from "@mui/material";
import SendMessage from "./components/SendMessage";





function App() {
  return (
<>
    <Box sx={{background:'#21213E',
    height: '650px',
    display: 'flex',
    }}>
          <MyTabs/>
          
    </Box>
    </>
  )}

export default App;
