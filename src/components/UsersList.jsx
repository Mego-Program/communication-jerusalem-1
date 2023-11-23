
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
        display: 'flex',
        width: "15%",
        position: "fixed",
        
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
        {items.map((objact) => (
          <Button
            key={objact.id}
          
            onClick={() => selectButton(objact.id)}
            sx={{
              color: "white",
              background: objact.id == selected ? "#21213E": "#121231",
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

