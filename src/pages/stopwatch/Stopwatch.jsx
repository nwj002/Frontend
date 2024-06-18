import React, { useState, useRef, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (time) => {
    const milliseconds = `00${time % 1000}`.slice(-3);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="Stopwatch">
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <span>{formatTime(time)}</span>
      </div>
      <div className="buttons">
        <button onClick={isRunning ? stopStopwatch : startStopwatch}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={recordLap} disabled={!isRunning}>
          Lap
        </button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
      <div className="laps">
        {laps.length > 0 && <h2>Laps</h2>}
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stopwatch;
