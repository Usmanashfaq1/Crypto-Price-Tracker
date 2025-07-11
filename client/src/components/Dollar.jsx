import { useEffect, useState } from "react";

const Dollar = () => {
  const [dollar, setDollar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsdToPkr = async () => {
      try {
        const res = await fetch(
          `https://api.currencyapi.com/v3/latest?apikey=cur_live_YA86jDoith56nDdz8crTgZ8TMJ1gJe4DOAQTKVyH&currencies=PKR`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch dollar rate");
        }

        const result = await res.json();
        const value = result?.data?.PKR?.value;

        if (!value) {
          throw new Error("Missing PKR value in response");
        }

        setDollar(value.toFixed(2));
      } catch (err) {
        console.error("Error fetching dollar rate:", err.message);
        setError("Unable to fetch USD rate");
      } finally {
        setLoading(false);
      }
    };

    fetchUsdToPkr();
  }, []);

  return (
    <div className="bg-white text-gray-800 border border-pink-300 rounded-lg p-4 text-sm shadow-sm">
      {loading && <span className="text-pink-500">Fetching USD rate...</span>}
      {error && <span className="text-red-600">{error}</span>}
      {!loading && !error && (
        <p>
          <span className="font-medium text-pink-600">USD Rate:</span>{" "}
          <strong>{dollar}</strong> PKR
        </p>
      )}
    </div>
  );
};

export default Dollar;
