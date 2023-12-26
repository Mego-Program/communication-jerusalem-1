
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import me from "./Me.js";




const Message = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: props.sender == me().name ? "end" : "",
      }}
    >
      <Box
        sx={{
          border: "none",
          marginBottom: "15px",
          width: "45%",
          alignItems: "flex-end",
        }}
      >
        <CardContent>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            gutterBottom
            sx={{
              color: props.sender == me().name ? "white" : "black",
              backgroundColor: props.sender == me().name ? "#0A0A1B" : "#F6C927",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
              padding: "10px",
            }}
          >
            {props.sender === me().name ? me().name + " (You)" : props.sender} - {props.time}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: props.sender == me().name ? "black" : "black",
              backgroundColor: props.sender == me().name ? "white" : "white",
              borderBottomRightRadius: "20px",
              borderBottomLeftRadius: "20px",
              padding: "10px",
            }}
          >
            {props.message}
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
};

export default Message;
