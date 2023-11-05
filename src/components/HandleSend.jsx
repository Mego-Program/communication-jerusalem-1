import React from 'react';
import MessageInput from './MessageInput.jsx'

export default function HandleSend() {
  
  const handleSend = (message) => {
    // Implement your logic for sending the message here
    console.log('Sending message:', message);
  }

  return (
    <>
        <MessageInput onSend={handleSend}/>
    </>
  )
}

