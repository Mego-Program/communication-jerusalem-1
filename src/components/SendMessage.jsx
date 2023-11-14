import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const SendMessage = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('Input Value:', inputValue);
  };

  return (
    <Box         sx={{display:'flex',position:'fixed'}}>
      <TextField
        label="Type something..."
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        sx={{width:'50%',
    alignItems:'center'}}
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Submit
      </Button>
    </Box>
  );
};

export default SendMessage;
