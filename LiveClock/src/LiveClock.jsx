
import React,{ useState, useEffect } from "react";
function formatTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function LiveClock() {
  const [time, setTime] = useState(formatTime());
  const [running, setRunning] = useState(true);

  function handleStart(){
    setRunning(true)
  }

  function handleStop(){
    setRunning(false)
  }

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        setTime(formatTime());
      }, 1000);
      
      return () => {
        clearInterval(intervalId);
      };
    }
    console.log("Clock stop")
  }, [running]);
    
    return(
        <div className="live-Clock">
            <h1 className="clock">{time}</h1>
            <button className="start-button" onClick={handleStart}>start</button>
            <button className="stop-button" onClick={handleStop}>stop</button>
        </div>
    );
}

export default LiveClock;