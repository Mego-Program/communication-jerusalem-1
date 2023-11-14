import React from "react"; // Make sure to import React
import { object } from "prop-types";

const chatHistoryFile = () => {
  const file = [
    {
      "user": "User1",
      "message": "שלום, איך אתה?",
      "timestamp": "2023-11-06T10:00:00",
    },
    {
      "user": "User2",
      "message": "שלום! אני טוב, תודה. מה קורה איתך?",
      "timestamp": "2023-11-06T10:05:00",
    },
    {
      "user": "User1",
      "message": "לא רע, תודה ששאלת. יש לי שאלה על דרך אורח הלבוש לאירוע הקרוב.",
      "timestamp": "2023-11-06T10:10:00",
    },
    {
      "user": "User2",
      "message": "כמובן, אני כאן לעזור. מה השאלה שלך?",
      "timestamp": "2023-11-06T10:15:00",
    },
    {
      "user": "User1",
      "message": "איזה הלבוש נחשב להתאים לאירוע פורמאלי?",
      "timestamp": "2023-11-06T10:20:00",
    },
    {
      "user": "User2",
      "message": "לאירוע פורמאלי, התאים הכי טוב הוא חליפת ערב או חליפת בעל זוג אם אתה איתנו. אנחנו צריכים להיות בעלי מראה!",
      "timestamp": "2023-11-06T10:25:00",
    },
  ];

  const arrayMessage = [];
  file.forEach((object) => arrayMessage.push(object.message)); // Fix this line

  return (
    <div>
      {arrayMessage.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default chatHistoryFile;
