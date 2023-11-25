import React, { useState } from "react";
import MyTabs from "./myTabs";
import UsersList from "./UsersList";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import ChatHistory from "./ChatHistory";
import Input from "./Input";
import LiveChat from "./LiveChat";
import NewMsg from "./NewMsg";

import users from "./users";
import groups from "./groups";







const ChatView = () => {
  const [selected, setSelected] = useState("");

  const [items, setItems] = useState(users);
  
  const [allMsg, setAllMsg] = useState([]); 

  // const [send,setSend] = useState(null)

  const [socket, setSocket] = useState(null); 

  function handleSetSelected(key) {
    setSelected(key);
  }

  function handleSetItems(itms) {
    setItems(itms);
  }

  function handleSetAllMsg(newMsg) {
    setAllMsg((prevArray) => [...prevArray, newMsg]);
  }
  // function handleSetSend(newMsg) {
    // setSend(newMsg);
  // }
  function handleSetSocket(skt) {
    setSocket(skt);
  }

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Box sx={{ position: "fixed" }}>
            <MyTabs
              setSelected={handleSetSelected}
              setItems={handleSetItems}
              users={users}
              groups={groups}
            />
        

            <UsersList
              selected={selected}
              setSelected={handleSetSelected}
              items={items}
            />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <ChatHistory selected={selected} />
            <LiveChat messages={allMsg} selected={selected}/>
            {/* <NewMsg setAllMsg={handleSetAllMsg} setSocket={handleSetSocket}/> */}
          </Box>
          <Input selected={selected} socket={socket} setAllMsg={handleSetAllMsg}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatView;


