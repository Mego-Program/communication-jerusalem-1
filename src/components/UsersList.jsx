import React, { useState } from "react";
import {
  ButtonGroup,
  InputAdornment,
  IconButton,
  Input,
  TextField,
} from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Drawer from "./Drawer";
import SearchIcon from "@mui/icons-material/Search";

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
              background: objact.userId === selected ? "#21213E" : "#121231",
              // borderColor: objact.userId === selected ? "#121231" : "#21213E",
              border: 0,
              display: "flex",
              justifyContent: "left",
              height: 50,
            }}
          >
            <Drawer />
            {objact.name}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
