import React, { useState } from "react";
import { TextareaAutosize, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// import me from "./me";
import Logo from "/Logo.png"

const me = { userId: 25, name: "Elazar" };

const Input = ({ selected, socket, setAllMsg }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      setAllMsg({
        from: me.userId,
        to: selected,
        message: inputValue,
        timestamp:
          new Date().toLocaleTimeString() +
          " " +
          new Date().toLocaleDateString(),
      });
      if (socket && inputValue.trim() !== "") {
        socket.emit("Message", {
          from: me.userId,
          to: selected,
          message: inputValue,
          timestamp:
            new Date().toLocaleTimeString() +
            " " +
            new Date().toLocaleDateString(),
        });
      }
      setInputValue("");
    }
  };

  if (!selected) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#21213E",
          minHeight: "100vh",
        }}
      >
        <img src={Logo} alt="Logo.png" />
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "fixed",
          bottom: "0",
          width: "80%",
        }}
      >
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Type a message"
          value={inputValue}
          maxRows={1}
          onChange={handleInputChange}
          style={{
            width: "100%",
            minHeight: "20px",
            padding: "8px",
            resize: "none",
          }}
        />
        <Button
          variant="contained"
          onClick={handleButtonClick}
          sx={{
            backgroundColor: "#F6C927",
            borderRadius: "0 4px 4px 0",
            color: "black",
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    );
  }
};
export default Input;
