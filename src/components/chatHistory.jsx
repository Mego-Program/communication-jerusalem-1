import React from "react";
import { Box } from "@mui/system";
import Message from "./message";

const dataBase = {
  3: [
    //get from server
    {
      user: "you",
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      user: "moishy",
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      user: "you",
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
    {
      user: "you",
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      user: "moishy",
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      user: "you",
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
    {
      user: "you",
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      user: "moishy",
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      user: "you",
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
  ],
  2: [
    {
      user: "you",
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      user: "dovi",
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      user: "you",
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
  ],
  1: [
    {
      user: "you",
      message: "שלום, איך אתה?",
      timestamp: "2023-11-06 10:00:00",
    },
    {
      user: "Avi",
      message: "שלום! אני טוב, תודה. מה קורה איתך?",
      timestamp: "2023-11-06 10:05:00",
    },
    {
      user: "you",
      message: "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      timestamp: "2023-11-06 10:10:00",
    },
    {
      user: "Avi",
      message: "כמובן, אני כאן לעזור. מה השאלה שלך?",
      timestamp: "2023-11-06 10:15:00",
    },
    {
      user: "you",
      message:
        "איזה הלבוש נחשב להתאים לאירוע פורמאלי? אני עכשיו כותב הרבה מאד מלל כדי שאוכל לראות שבאיזשהו שלב ההודעה יורדת שורה.",
      timestamp: "2023-11-06 10:20:00",
    },
  ],
};

const ChatHistory = (props) => {
  let current = props.name;

  if (!dataBase[current]) {
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
      {dataBase[current].map((object, index) => (
        <Message
          sender={object.user}
          message={object.message}
          time={object.timestamp}
          key={index}
        />
      ))}
    </Box>
  );
};

export default ChatHistory;
