
import React from "react";
import Grid from "@mui/material/Grid";
import MyTabs from "./components/myTabs";
import { Box } from "@mui/system";
import ChatHistory from "./components/chatHistory";
=======
import React from 'react';
import MyTabs from './components/singeleOrGroup';
import Profile from './components/Profile/Profile';




function App() {
  return (
    <Box sx={{background:'#21213E',

    }}>
      <Grid container spacing={1}>
        <Grid item xs={2.5}>
          <MyTabs />
        </Grid>
        <Grid item xs={9.5}></Grid>
      </Grid>
    </Box>
  );
    <>
    <Profile/>
    <MyTabs/>
    </>
  )
}

export default App;
