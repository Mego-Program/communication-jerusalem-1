import React, { useState } from "react";
import { Button, ButtonGroup, Input, Badge } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "./Drawer";
import { object } from "prop-types";
import { Key } from "@mui/icons-material";

export default function UsersList(props) {
  const [filterText, setFilterText] = useState("");
  const [unreadMessages, setUnreadMessages] = useState({});

  const selected = props.selected;
  const items = props.items;
  

  const selectButton = (key) => {
    props.setSelected(key);
    setUnreadMessages({ ...unreadMessages, [key]: 0 });
  };

  const filteredItems = items.filter(
    (objact) =>
      objact._id !== props.me.userId &&
      objact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  function handleNewMessage(userId) {
    if (userId !== selected && unreadMessages[userId] === undefined) {
      setUnreadMessages((prevUnreadMessages) => ({
        ...prevUnreadMessages,
        [userId]: 1,
      }));
    } else if (userId !== selected && unreadMessages[userId] !== undefined) {
      // Check if the user is not selected and there's an unread count
      // You might add here your logic to detect new messages
      // For now, I'll simulate a random condition that marks a message as new
      const isNewMessage = Math.random() > 0.5; // Simulating a condition for a new message

      if (isNewMessage) {
        setUnreadMessages((prevUnreadMessages) => ({
          ...prevUnreadMessages,
          [userId]: prevUnreadMessages[userId] + 1,
        }));
      }
    }
  }

  function UnreadMessages(userId) {
    const unreadCount = unreadMessages[userId] || 0;
    return unreadCount > 0 ? (
      <Badge badgeContent={unreadCount} color="primary" />
    ) : null;
  }

  return (
    <Box
      sx={{
        minWidth: "15%",
        position: "fixed",
        overflow: "auto",
        height: "100vh",
        "&::-webkit-scrollbar": {
          width: "1px",
          backgroundColor: "#21213E",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#0A0A1B",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchIcon sx={{ color: "white", marginLeft: 1 }} />
        <Input
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search or start a new chat"
          sx={{
            fontSize: 10,
            width: "80%",
            margin: "10px auto",
            display: "block",
            backgroundColor: "#1f1f3d",
            color: "white",
            "& .MuiInputBase-input": {
              padding: "10px 12px",
            },
          }}
        />
      </Box>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        sx={{
          minWidth: "100%",
          flexDirection: "column",
          ".MuiButtonGroup-grouped": {
            borderRadius: 2,
            "&:hover": { borderRadius: 0 },
          },
        }}
      >
        {filteredItems.map((objact) => (
          <Button
            key={objact._Id}
            onClick={() => {
              selectButton(objact._id);
              handleNewMessage(objact._id);
            }}
            sx={{
              minWidth: "15%",
              color: "white",
              background: objact._id === selected ? "#121231" : "#21213E",
              border: "none",
              height: 50,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px",
              boxShadow: objact.username === selected ? "inset 0 0 1px 1px #21213E" : "none",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Drawer />
              {objact.username}
            </Box>
            {UnreadMessages(objact._id)}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
