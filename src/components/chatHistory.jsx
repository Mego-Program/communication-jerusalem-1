import React from "react";
import { Box } from "@mui/system";
import Message from "./Message";

const dataBase = {
  3: [

    {
      from: 25,
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      from: 3,
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      from: 25,
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
    {
      from: 25,
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      from: 3,
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      from: 25,
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
    {
      from: 25,
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      from: 3,
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      from: 25,
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
  ],
  2: [
    {
      from: 25,
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      from: 2,
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      from: 25,
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
  ],
  1: [
    {
      from: 25,
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      from: 1,
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      from: 25,
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
    {
      from: 1,
      message: "כמובן, אני כאן לעזור. מה השאלה שלך?",
      timestamp: "2023-11-06 10:15:00",
    },
    {
      from: 25,
      message:
        "איזה הלבוש נחשב להתאים לאירוע פורמאלי? אני עכשיו כותב הרבה מאד מלל כדי שאוכל לראות שבאיזשהו שלב ההודעה יורדת שורה.",
      timestamp: "2023-11-06 10:20:00",
    },
  ],
};

const ChatHistory = ({selected}) => {

 
  if (!dataBase[selected]) {
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
      {dataBase[selected].map((object, index) => (
        <Message
          sender={object.from}
          message={object.message}
          time={object.timestamp}
          key={index}
        />
      ))}
    </Box>
  );
};

export default ChatHistory;
