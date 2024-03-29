import React, { useState } from "react";
import MyTabs from "./MyTabs.jsx";
import UsersList from "./UsersList.jsx";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import ChatHistory from "./ChatHistory.jsx";
import Input from "./Input.jsx";
import LiveChat from "./LiveChat.jsx";
// import NewMsg from "./NewMsg.jsx";
import "typeface-poppins"; // not working for now
import { useEffect, useRef } from "react";
import me from "./me.js";
import { getAllUsers } from "./Fetch-requests.jsx";
import groups from "./groups.js";
import io from "socket.io-client";

const socket = io("https://communication-1-server.onrender.com/");
const ChatView = () => {
  const [selected, setSelected] = useState(null);

  const [allMsg, setAllMsg] = useState([]);

  const [listUsers, setListUsers] = useState([]);

  const [items, setItems] = useState([]);




  function handleSetSelected(key) {
    setSelected(key);
  }

  function handleSetItems(itms) {
    setItems(itms);
  }

  function handleSetAllMsg(newMsg) {
    setAllMsg((prevArray) => [...prevArray, newMsg]);
  }


  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };




  useEffect(() => {
    scrollToBottom();
  }, [allMsg, selected]);

  const users = async () => {
    const list = await getAllUsers();
    setListUsers(list);
    setItems(list)
  };


  useEffect(() => {
    socket.emit("userId", me().name);
  },[]);

  useEffect(() => {

    socket.on("message", (data) => {
      console.log("came");
      handleSetAllMsg(data);
    });
  },[]);

  useEffect(() => {
    users();
  }, []);
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
              users={listUsers}
              groups={groups}
            />
            <UsersList
              selected={selected}
              setSelected={handleSetSelected}
              items={items}
              me={me()}
              socket={socket}
            />
          </Box>
        </Grid>
        <Grid item xs={7} sm={8} md={9} lg={10}>
          <Box >
            <ChatHistory selected={selected} scrollToBottom={scrollToBottom} />

            <LiveChat messages={allMsg} selected={selected} />
          </Box>
          <Box ref={messagesEndRef}>
            <Input
              selected={selected}
              socket={socket}
              setAllMsg={handleSetAllMsg}
            />
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatView;
