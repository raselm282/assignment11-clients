import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const MarathonCountdown = ({ startDate }) => {
  const calculateRemainingTime = () => {
    const now = new Date().getTime();
    const startTimestamp = new Date(startDate).getTime();
    return Math.max(0, Math.floor((startTimestamp - now) / 1000)); // Remaining time in seconds
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div>Event Started!</div>;
    }

    const days = Math.floor(remainingTime / (60 * 60 * 24));
    const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = remainingTime % 60;
    return (
      <div className="flex gap-3 px-4" style={{ textAlign: "center" }}>
        <div>
        <div style={{ fontSize: "20px" }}>{days}d</div>
        <div style={{ fontSize: "20px" }}>{hours}h</div>
        </div>
        <div>
        <div style={{ fontSize: "20px" }}>{minutes}m</div>
        <div style={{ fontSize: "20px" }}>{seconds}s</div>
        </div>
      </div>
    );
  };

  const duration = calculateRemainingTime();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Countdown to Marathon</h2>
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        initialRemainingTime={duration}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[duration, duration / 2, duration / 4, 0]}
        onComplete={() => ({ shouldRepeat: false })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default MarathonCountdown;
