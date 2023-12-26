import React from "react";
import { Box } from "@mui/material";
import Message from "./MessageEE"; 

const LiveChat = ({messages, selected}) => {
    if(messages.length !== 0){
  return (
    <Box>
      {messages.filter((object) => object.from === selected || object.to === selected)
      .map((object, index) => (
        <Message
          sender={object.from}
          message={object.text}
          time={object.timestamp}
          key={index}
        />
      ))}
    </Box>)


  }}


export default LiveChat;