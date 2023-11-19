import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid";
import ChatHistory from './chatHistory';
import SendMessage from './SendMessage';
import Drawer from './Drawer';
import { red } from '@mui/material/colors';



const users = [{name:'Avi',id:1},{name:'dovi',id:2},{name:'moishy',id:3},{name:'david',id:4},{name:'josh',id:5},{name:'eithan',id:6},{name:'sander',id:6},{name:'boaz',id:7},{name:'Ariel',id:8},{name:'tzvi',id:9},{name:'yaniv',id:10},{name:'haim',id:11},{name:'osnat',id:12},{name:'meny',id:13},{name:'mendel',id:14},{name:'hardon',id:15},{name:'Av',id:16},{name:'dov',id:17},{name:'moish',id:18},{name:'dave',id:19}]//get from server

const groups = [{name:'Administrators',id:100},{name:'My pro team',id:101},{name:'general',id:102},{name:'sorces',id:103}]//get from server

function MyTabs() {
  const [value, setValue] = useState(0);
  const [items, setItems] = useState(users);
  const [selected, setSelected] = useState('');


  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0){ 
        setItems(users)}
        else{setItems(groups)}
        setSelected('')
  };
  const selectButton = (item)=>{
    setSelected(item)

}
  

  return (
    

    <Grid container spacing={1}>
        <Grid item xs={2}>
        <Box sx={{position:'fixed',overflow: 'auto'}}>
      <Tabs value={value} sx={{
        '.MuiTab-root': {
          backgroundColor: '#0A0A1B',
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
          height:'600px',

          '.MuiButton-root': {
            height: 50
          },
          '.MuiButton-root.selected': {
            background: '#21213E',
          
          }
        }}
      >
        {items.map((objact)=>
          <Button
            key={objact.id}
            className={objact.id==selected?'selected':''}
            onClick={()=>selectButton(objact.id)} 
            sx={{color:'white', background:'#121231',
            border: 0, 
            display: "flex", 
            justifyContent: "left",
          }}
          >
            <Drawer/>
            {objact.name}
          </Button>)}
      </ButtonGroup>
    </Box>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{
            }}>
          <ChatHistory name={selected}/>
          </Box>
          <SendMessage/>
          </Grid>
      </Grid>


    
  );
}

export default MyTabs;
