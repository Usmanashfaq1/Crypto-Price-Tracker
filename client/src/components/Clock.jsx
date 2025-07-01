import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="bg-amber-50 m-4 border-2  p-1">
      Time : <strong>{date.toLocaleTimeString()}</strong>
    </span>
  );
};

export default Clock;
