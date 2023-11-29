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

import { useEffect, useRef } from "react";




const me = {userId:25,name:'Elazar'}



const ChatView = () => {
  const [selected, setSelected] = useState(null);

  const [items, setItems] = useState(users);

  const [allMsg, setAllMsg] = useState([]);

  console.log(allMsg)



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
 

  
  function handleSetSocket(skt) {
    setSocket(skt);
  }

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [allMsg, selected]);

  return (
    <Box
      sx={{
        background: "#21213E",
        minHeight: "100vh",
        overflow: "auto",
        height: "100vh",
        "&::-webkit-scrollbar": {
          width: "10px",
          backgroundColor: "#21213E",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#0A0A1B",
        },
      }}
    >
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
              me={me}
            />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <ChatHistory selected={selected} />

            <LiveChat messages={allMsg} selected={selected} />
          </Box>
          <Box ref={messagesEndRef}>
            <Input
              selected={selected}
              socket={socket}
              setAllMsg={handleSetAllMsg}
            />

            <LiveChat messages={allMsg} selected={selected}/>
            <NewMsg setAllMsg={handleSetAllMsg} setSocket={handleSetSocket}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatView;
