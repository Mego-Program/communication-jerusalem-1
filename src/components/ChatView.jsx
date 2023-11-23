import React, { useState } from "react";
import MyTabs from "./myTabs";
import UsersList from "./UsersList";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import ChatHistory from "./ChatHistory";
import Input from "./Input";
import SentMessages from "./SentMessages";

const users = [
  { name: "Avi", id: 1 },
  { name: "dovi", id: 2 },
  { name: "moishy", id: 3 },
  { name: "david", id: 4 },
  { name: "josh", id: 5 },
  { name: "eithan", id: 6 },
  { name: "sander", id: 20 },
  { name: "boaz", id: 7 },
  { name: "Ariel", id: 8 },
  { name: "tzvi", id: 9 },
  { name: "yaniv", id: 10 },
  { name: "haim", id: 11 },
  { name: "osnat", id: 12 },
  { name: "meny", id: 13 },
  { name: "mendel", id: 14 },
  { name: "hardon", id: 15 },
  { name: "Av", id: 16 },
  { name: "dov", id: 17 },
  { name: "moish", id: 18 },
  { name: "dave", id: 19 },
]; //get from server

const groups = [
  { name: "Administrators", id: 100 },
  { name: "My pro team", id: 101 },
  { name: "general", id: 102 },
  { name: "sorces", id: 103 },
]; //get from server



const ChatView = () => {
  const [selected, setSelected] = useState("");
  const [items, setItems] = useState(users);
  
  const [sent, setSent] = useState([]); 

  function handleSetSelected(key) {
    setSelected(key);
  }

  function handleSetItems(itms) {
    setItems(itms);
  }

  function handleSetSent(newMsg) {
    setSent((prevArray) => [...prevArray, newMsg]);
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
            <ChatHistory name={selected} />
            <SentMessages sent={sent} />
          </Box>
          <Input setSent={handleSetSent} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatView;
