import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";

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
    <Box sx={{backgroundColor: "#0A0A1B",}}>
      <Tabs sx={{}}value={value} onChange={handleChange}>
        <Tab key={0} label="users" />
        <Tab key={1} label="groups" />
      </Tabs>
    </Box>
  );
}

export default MyTabs;
