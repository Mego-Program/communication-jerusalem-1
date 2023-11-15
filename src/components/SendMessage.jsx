import React from 'react';
import { useState } from 'react';
import { TextareaAutosize, Button, Box } from '@mui/material';

const SendMessage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('Input Value:', inputValue);//post to server
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        bottom: '0',
        width: '50%',
        padding: '8px',
        margin: '8px',
      }}
    >
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Write a message"
        value={inputValue}
        maxRows={1} 
        onChange={handleInputChange}
        style={{ width: '100%', minHeight: '20px', padding: '8px', resize: 'none' }}
      />
      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{
          backgroundColor: '#F6C927',
          borderRadius: '0 4px 4px 0',
          color: 'white',
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default SendMessage;
