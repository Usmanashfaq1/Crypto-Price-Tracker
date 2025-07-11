import { useEffect, useState } from "react";

const Weather = () => {
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=1620696b6492415cb62144651252606&q=Faisalabad&aqi=no`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const result = await res.json();
      setTemperature(result.current.temp_c);
      setIcon(result.current.condition.icon);
    } catch (err) {
      console.error("Weather error:", err.message);
      setError("Unable to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 10000); // refresh every 10 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-800 border border-pink-300 rounded-lg p-4 text-sm shadow-sm flex items-center gap-3">
      {loading && <span className="text-pink-500">Fetching weather...</span>}
      {error && <span className="text-red-600">{error}</span>}
      {!loading && !error && (
        <>
          <img src={icon} alt="Weather icon" className="w-6 h-6" />
          <span>
            <span className="font-medium text-pink-600">Temp:</span>{" "}
            <strong>{temperature}°C</strong>
          </span>
        </>
      )}
    </div>
  );
};

export default Weather;
