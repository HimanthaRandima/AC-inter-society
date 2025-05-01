import React, { useState, useEffect, useCallback } from "react";
import "@/styles/countdownTimer.css"; // Importing the separate CSS file

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // const [dots, setDots] = useState("");

  const endTime = new Date(targetDate).getTime();

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance < 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }
  }, [endTime]);

  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  // useEffect(() => {
  //   let dotCount = 0;
  //   let typewriterInterval;
  //   let pauseTimeout;

  //   const updateDots = () => {
  //     setDots(".".repeat(dotCount));
  //     dotCount++;

  //     if (dotCount > 3) {
  //       dotCount = 0;
  //       clearInterval(typewriterInterval);
  //       pauseTimeout = setTimeout(() => {
  //         typewriterInterval = setInterval(updateDots, 1000);
  //       }, 2000);
  //     }
  //   };

  //   typewriterInterval = setInterval(updateDots, 500);

  //   return () => {
  //     clearInterval(typewriterInterval);
  //     clearTimeout(pauseTimeout);
  //   };
  // }, []);

  const timeUnits = Object.entries(timeLeft);

  return (
    <div className="countdown-container">
      <div className="countdown-header">
        <h2 className="countdown-title">Clock is ticking</h2>
        <p className="countdown-subtext">Secure your spot NOW!</p>
      </div>
      <div className="countdown-grid">
        {timeUnits.map(([unit, value]) => (
          <div key={unit} className="time-unit">
            <span className="time-value">
              {value.toString().padStart(2, "0")}
            </span>
            <span className="time-label">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
