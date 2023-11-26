import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
// import me from './me'

const me = {userId:25,name:'Elazar'}

const newSocket = io('http://localhost:3000');
const NewMsg = ({ setAllMsg,setSocket }) => {
    
  function myUserId(){

    newSocket.emit("userId",me.userId)
}

  useEffect(() => {
   
    


    setSocket(newSocket);
    myUserId()

   
  

    newSocket.on('message', (data) => {
      console.log('came')
      setAllMsg(data);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

};

export default NewMsg;
