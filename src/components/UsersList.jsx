
import Reac, { useState, useEffect } from "react";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Drawer from "./Drawer";



export default function UsersList(props){
  const selected = props.selected;
  const items = props.items;
  const [activity, setActivity] = useState("");
  const [activityTimer, setActivityTimer] = useState(null);

  useEffect(() => {
    // Cleanup timer on component unmount
    return () => clearTimeout(activityTimer);
  }, [activityTimer]);


  const selectButton = (key) => {
    props.setSelected(key);
  };

  
  useEffect(() => {
    // Listen for the "activity" socket event
    props.socket.on("activity", (name) => {
      setActivity(`${name} is typing...`);

      // Clear after 3 seconds
      clearTimeout(activityTimer);
      setActivityTimer(
        setTimeout(() => {
          setActivity("");
        }, 3000)
      );
    });

    // Cleanup socket listener on component unmount
    return () => {
      props.socket.off("activity");
    };
  }, [activityTimer, props.socket]);

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
            {activity && <span style={{ marginLeft: 8, fontSize: 12 }}>{activity}</span>}

          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

