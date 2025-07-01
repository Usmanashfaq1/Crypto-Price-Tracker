import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("null");

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=1620696b6492415cb62144651252606&q=Faisalabad&aqi=no`
      );
      const result = await res.json();
      setWeather(result.current.temp_c);
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 10000); // every 10 sec

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span className="bg-amber-50 m-4 border-2  p-1">
      Temperature : <strong>{weather}</strong> Degree
    </span>
  );
};

export default Weather;
