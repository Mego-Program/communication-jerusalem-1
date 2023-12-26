import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Box, width } from "@mui/system";

function MyTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 0) {
      props.setItems(props.users);
    } else {
      props.setItems(props.groups);
    }
    props.setSelected("");
  };

  
  return (
    <Tabs
      sx={{ backgroundColor: "#0A0A1B" }}
      value={value}
      onChange={handleChange}
    >
      <Tab sx={{ width: "50%" }} key={0} label="users" />
      <Tab sx={{ width: "50%" }} key={1} label="groups" />
    </Tabs>
  );
}

export default MyTabs;
