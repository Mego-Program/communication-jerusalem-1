import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Message from "./Message.jsx";
import me from "./me.js";


const ChatHistory = ({ selected }) => {
  const [dataBase, setDataBase] = useState([]);
  console.log('database',dataBase)
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`https://communication-1-server.onrender.com/findMessages?me=${me().name}&selected=${selected}`);
        const data = await response.json();
        setDataBase(data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selected]); // אנו מוסיפים את selected לרשימת התלות, כדי לשלוח את הבקשה מחדש כאשר selected משתנה.

  if (!dataBase) {
    return (
      <Box
        sx={{
          display: "flex",
        }}
      ></Box>
    );
  }
  return (
    <Box>
      {dataBase.map((object, index) => (
        <Message
          sender={object.senderID}
          message={object.content}
          time={object.sendDate}
          key={index}
        />
      ))}
    </Box>
  );
};

export default ChatHistory;
