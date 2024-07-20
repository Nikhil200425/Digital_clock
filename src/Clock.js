import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DigitalClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      const response = await axios.get('http://localhost:9000/time');
      setTime(response.data.time);
    };

    const timer = setInterval(() => {
      fetchTime();
    }, 1000);

    return () => clearInterval(timer);
  },[]);

  return (
    <>
    <center>
      <h1>Digital Clock</h1>
      <p>Current Time: {time}</p>
    </center>
    </>
  );
}

export default DigitalClock;

	