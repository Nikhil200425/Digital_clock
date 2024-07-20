import React, { useState, useEffect } from "react";
import axios from "axios";

const Clock = () => {
  const [timeZones, setTimeZones] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/timezones")
      .then((response) => {
        setTimeZones(response.data);
      })
      .catch((error) => {
        console.error("Error fetching time zones:", error);
      });
  }, []);

  return (
    <>
    <center>
      <h1>World Clock</h1>
      {timeZones.map((timezone) => (
        <div key={timezone}>
          <h2>{timezone}</h2>
          <ClockDisplay timezone={timezone} />
        </div>
      ))}
    </center>
    </>
  );
};

const ClockDisplay = ({ timezone }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", { timeZone: timezone }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { timeZone: timezone }));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timezone]);

  return <p>{time}</p>;
};

export default Clock;
