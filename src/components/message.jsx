
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Message = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: props.sender == "you" ? "end" : "",
      }}
    >
      <Box
        sx={{
          border: "none",
          marginBottom: "8px",
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
              color: props.sender == "you" ? "white" : "black",
              backgroundColor: props.sender == "you" ? "#121231" : "#F6C927",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
              padding: "10px",
            }}
          >
            {props.sender} - {props.time}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: props.sender == "you" ? "black" : "black",
              backgroundColor: props.sender == "you" ? "white" : "white",
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
