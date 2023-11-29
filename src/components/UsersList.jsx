import React from "react";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Drawer from "./Drawer";



export default function UsersList(props){
  const selected = props.selected;
  const items = props.items;


  const selectButton = (key) => {
    props.setSelected(key);
  };

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
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        sx={{
          width: "100%",
          flexDirection: 'column',  
        }}
      >
        {items.filter((objact) => objact.userId !== props.me.userId).map((objact) => (
          <Button
            key={objact.userId}
          
            onClick={() => selectButton(objact.userId)}
            sx={{
              color: "white",
              background: objact.userId == selected ? "#21213E": "#121231",
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
};

