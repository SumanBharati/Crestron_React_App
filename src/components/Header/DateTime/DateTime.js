import React, { useState, useEffect } from "react";
import "./DateTime.css";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const month = date.toLocaleString('default', { month: 'long' });
  const dateCount = date.getDate().toString();
  const year = date.getFullYear().toString();
  const formattedDateTime = `${month} ${dateCount}, ${year}  ${hours}:${minutes}`;

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <>
      <div className="dateTime">{formattedDateTime}</div>
    </>
  );
};

export default DateTime;
