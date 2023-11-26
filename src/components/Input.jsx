import React, { useState } from "react";
import { TextareaAutosize, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// import me from "./me";

const me = {userId:25,name:'Elazar'}


const Input = ({selected,socket,setAllMsg}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     handleButtonClick();
  //   }
  // };

  const handleButtonClick = () => {

    function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      
      return `${hours}:${minutes}`;
    }

    const message = {
      from: me.userId,
      to: selected,
      text: inputValue,
      timestamp:
        getCurrentTime() +
        "  " +
        new Date().toLocaleDateString(),
    }
    if (inputValue.trim() !== "") {
      setAllMsg(message);
    }

      if (socket && inputValue.trim() !== ""){
      socket.emit('privetMessage', message)
      }
      setInputValue("")
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

      }
export default Input;