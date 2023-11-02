import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const users = ['Avi','dovi','moishy','david','josh','eithan','sander','daniel']
const groups = ['Administrators','My pro team','general','sorces']
function MyTabs() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [items, setItems] = useState(users);


  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0){ 
        setItems(users)}
        else{setItems(groups)}
        setValue2(0)

  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab key={0} label="users"/>
        <Tab key={1} label="groups"/>
      </Tabs>

      <Tabs value={value2} orientation="vertical"   sx={{
        '& .MuiTab-root': {
          width: '250px',
        //   backgroundColor: 'grey',
          border: '1px solid',
        },
      }} onChange={handleChange2}>
        {items.map((item, index) => (
          <Tab key={index} label={item}/>
        ))}
      </Tabs>
    </div>
  );
}

export default MyTabs;
