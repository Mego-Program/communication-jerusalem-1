import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function MessageInput({ onSend }) {
  
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== ''){
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

  return (
    <div>
      <TextField
        label="Type your message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={handleMessageChange}
        onKeyPress={handleKeyPress}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendClick}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>
  );
}


