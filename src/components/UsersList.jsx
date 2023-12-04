import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Input,
  TextField,
  IconButton,
  InputAdornment,
  Badge,
} from "@mui/material";
import { Box } from "@mui/system";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "./Drawer";

export default function UsersList(props) {
  const [filterText, setFilterText] = useState("");

  const selected = props.selected;
  const items = props.items;

  const selectButton = (key) => {
    props.setSelected(key);
  };

  const filteredItems = items.filter(
    (objact) =>
      objact.userId !== props.me.userId &&
      objact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  let UnreadMessages = 1;

  return (
    <Box
      sx={{
        width: "15%",
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
            fontSize: 14,
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
          width: "100%",
          flexDirection: "column",
        }}
      >
        {filteredItems.map((objact) => (
          <Button
            key={objact.userId}
            onClick={() => selectButton(objact.userId)}
            sx={{
              color: "white",
              background: objact.userId === selected ? "#121231" : "#21213E",
              border: 0,
              height: 50,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Drawer />
              {objact.name}
            </Box>
            <Badge badgeContent={UnreadMessages} color="primary">
              <MarkUnreadChatAltIcon color="white" />
            </Badge>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
