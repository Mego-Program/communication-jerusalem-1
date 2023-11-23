
import React from "react";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Drawer from "./Drawer";


const UsersList = (props) => {
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
          ".MuiButton-root": {
            height: 50,
          },
          ".MuiButton-root.selected": {
            background: "#21213E",
          },
        }}
      >
        {items.map((objact) => (
          <Button
            key={objact.id}
            className={objact.id == selected ? "selected" : ""}
            onClick={() => selectButton(objact.id)}
            sx={{
              color: "white",
              background: "#121231",
              border: 0,
              display: "flex",
              justifyContent: "left",
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

export default UsersList;
