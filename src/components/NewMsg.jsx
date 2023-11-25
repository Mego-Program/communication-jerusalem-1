import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const NewMsg = ({ setAllMsg,setSocket }) => {
  

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    newSocket.on('message', (data) => {
      setAllMsg(data);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

};

export default NewMsg;
