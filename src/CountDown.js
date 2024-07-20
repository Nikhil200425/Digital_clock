import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    setRemainingTime(minutes * 60 + seconds);
  }, [minutes, seconds]);

  useEffect(() => {
    let intervalId = null;

    if (timerStarted && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime <= 0) {
      clearInterval(intervalId);
      alert('Timer ended!');
      setMinutes(0);
      setSeconds(0);
      setTimerStarted(false);
    }

    return () => {
      clearInterval(intervalId);

    };
  }, [timerStarted, remainingTime]);

  const handleMinutesChange = (e) => {
    const { value } = e.target;
    setMinutes(Number(value));
  };

  const handleSecondsChange = (e) => {
    const { value } = e.target;
    setSeconds(Number(value));
  };

  const handleStartTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setTimerStarted(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <>
    <center>
      <h1>Countdown Timer</h1>
      <div>
        <label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={handleMinutesChange}
          />
        </label>
	<br/><br/>
        <label>
          Seconds:
          <input
            type="number"
            value={seconds}
            onChange={handleSecondsChange}
          />
        </label>
        <br/><br/>
      </div>
      <button onClick={handleStartTimer} disabled={timerStarted}>
        Start Timer
      </button>
      <h2>{formatTime(remainingTime)}</h2>
    </center>
    </>
  );
};

