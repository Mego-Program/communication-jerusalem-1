import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import me from "./me.js";



const newSocket = io('https://communication-1-server.onrender.com/');
const NewMsg = ({ setAllMsg,setSocket }) => {
    
  function myUserId(){

    newSocket.emit("userId",me().userId)
    console.log("userId sended")
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
