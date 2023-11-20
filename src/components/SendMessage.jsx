import React from "react";
import { useState } from "react";
import { TextareaAutosize, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SendMessage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      //post to server
      console.log("Input Value:", inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

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
};

export default SendMessage;
