import React from "react";
import { Box } from "@mui/material";
import Message from "./Message"; // Import Message component

const SentMessages = (props) => {
    if(props.sent.length !== 0){
  return (
    <Box>
      {props.sent.map((object, index) => (
        <Message
          sender={object.user}
          message={object.message}
          time={object.timestamp}
          key={index + 100}
        />
      ))}
    </Box>
  )}
}

export default SentMessages;