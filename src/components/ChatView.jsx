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
import "typeface-poppins"; // not working for now
import { useEffect, useRef } from "react";
// import axios from "axios";
const me = { userId: 25, name: "Elazar" };

const ChatView = () => {
  const [selected, setSelected] = useState(null);

  const [items, setItems] = useState(users);

  const [allMsg, setAllMsg] = useState([]);

  console.log(allMsg);

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
        fontFamily: "Poppins", // not working for now
        background: "#21213E",
        minHeight: "100vh",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "10px",
          backgroundColor: "#21213E",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#0A0A1B",
        },
      }}
    >
      <Grid container spacing={0.5}>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <Box
            sx={{
              position: "fixed",
              minWidth: "15%",
              backgroundColor: "#121231",
              minHeight: "100vh",
            }}
          >
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
        <Grid item xs={7} sm={8} md={9} lg={10}>
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
            <NewMsg setAllMsg={handleSetAllMsg} setSocket={handleSetSocket} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatView;
