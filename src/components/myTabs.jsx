import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { flexbox } from '@mui/system';


const users = ['Avi','dovi','moishy','david','josh','eithan','sander','daniel']
const groups = ['Administrators','My pro team','general','sorces']
function MyTabs() {
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(users);
  const [selected, setSelected] = useState(null);


  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0){ 
        setItems(users)}
        else{setItems(groups)}
        setSelected(null)
  };
  const selectButton = (index)=>{
    setSelected(index)

}
  

  return (
    <>
      <Tabs value={value} sx={{
        '.MuiTab-root': {
          backgroundColor: '#0A0A1B',
          flex: '100%',
        },
      }}  onChange={handleChange}>
        <Tab  key={0} label="users"/>
        <Tab key={1} label="groups"/>
      </Tabs>

      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        sx={{
          width: '100%',
          background:'#121231',
          height:'600px',


          '.MuiButton-root': {
            height: 50
          },
          '.MuiButton-root.selected': {
            background: '#21213E',
          
          }
        }}
      >
        {items.map((item,index)=>
          <Button
            key={index}
            className={index==selected?'selected':''}
            onClick={()=>selectButton(index)} 
            sx={{color:'white',
            border: 0
          }}
          >
            {item}
          </Button>)}
      </ButtonGroup>



    </>
  );
}

export default MyTabs;
