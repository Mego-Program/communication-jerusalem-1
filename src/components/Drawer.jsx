import React from "react";
import {
  Box,
  SwipeableDrawer,
  Fab,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  Message as MessageIcon,
  Info as InfoIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  Link as LinkIcon,
  PermMedia as PermMediaIcon,
  FileCopy as FileCopyIcon,
} from "@mui/icons-material";
import { getAllUsers } from "./Fetch-requests.jsx";

export default function Drawer() {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ color: "white", background: "#121231" }}>
        <Avatar alt="Avatar" src="" sx={{ margin: 5, width: 120, height: 120 }} ></Avatar>
        {[
          "User Name",
          "About",
          "Mail@gmail.com",
          "+972-5223-55658",
          "Message",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {index === 0 ? (
                  <CheckBoxOutlineBlankIcon />
                ) : index === 2 ? (
                  <MailIcon />
                ) : index === 3 ? (
                  <PhoneIcon />
                ) : index === 4 ? (
                  <MessageIcon />
                ) : (
                  <InfoIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ color: "white", background: "#121231" }}>
        {["Media", "Files", "Links"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {index === 0 ? (
                  <PermMediaIcon />
                ) : index === 1 ? (
                  <FileCopyIcon />
                ) : (
                  <LinkIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Fab
            size="small"
            sx={{ marginRight: "10px" }}
            onClick={toggleDrawer(anchor, true)}
          >
            {<Avatar alt="Avatar" src=""/>}
          </Fab>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
