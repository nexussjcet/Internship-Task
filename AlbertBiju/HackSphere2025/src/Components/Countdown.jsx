import  { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const target = new Date("2025-06-20T00:00:00");
    const now = new Date();
    const total = Math.floor((target - now) / 1000);

    const seconds = total % 60;
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / 3600) % 24);
    const days = Math.floor(total / (3600 * 24));

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="simple-countdown">
      <h3>Countdown to HackSphere 2025</h3>
      <div className="simple-units">
        <div><span>{timeLeft.days}</span> <small>Days</small></div>  
        <div><span>{timeLeft.hours}</span> <small>Hours</small></div>  
        <div><span>{timeLeft.minutes}</span> <small>Minutes</small></div>
        <div><span>{timeLeft.seconds}</span> <small>Seconds</small></div> 
      </div>
    </div>
  );
};

export default Countdown;
