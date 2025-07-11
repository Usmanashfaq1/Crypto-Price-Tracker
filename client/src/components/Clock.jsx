import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // set to false for 24-hour format
  });

  return (
    <div
      className="bg-amber-100 text-gray-800 font-semibold px-4 py-2 rounded-lg border border-amber-300 shadow-sm m-4"
      aria-label="Current time"
    >
      🕒 <span>Time: {formattedTime}</span>
    </div>
  );
};

export default Clock;
