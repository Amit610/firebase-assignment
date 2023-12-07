import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            if (isBreak) {
              // Start the break timer
              setIsBreak(false);
              setMinutes(25);
            } else {
              // Start the work timer
              setIsBreak(true);
              setMinutes(5);
            }
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isBreak]);

  const handleStartPause = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className='justify-center text-center'>
      <h2>{isBreak ? 'Break Timer' : 'Pomodoro Timer'}</h2>
      <p>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
      <button className='bg-red-500 hover:bg-red-600 text-white p-2 mr-1 rounded mt-4' onClick={handleStartPause}>{isActive ? 'Pause' : 'Start'}</button>
      <button className='bg-red-500 hover:bg-red-600 text-white p-2 rounded mt-4' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
