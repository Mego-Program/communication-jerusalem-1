import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Message from "./MessageEE.jsx";
import me from "./me.js";


const ChatHistory = ({ selected }) => {
  const [dataBase, setDataBase] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/findMessages?me=${me().userId}&selected=${selected}`);
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
          sender={object.from}
          message={object.text}
          time={object.timestamp}
          key={index}
        />
      ))}
    </Box>
  );
};

export default ChatHistory;
