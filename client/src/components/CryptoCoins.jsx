import { useState, useEffect } from "react";

const CryptoCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/coins");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCoins(data);
      } catch (err) {
        console.error("Error fetching from backend:", err);
        setError("Failed to fetch coin data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  // ⏳ Loading state
  if (loading) return <p>Loading coins...</p>;

  // ❌ Error state
  if (error) return <p className="text-red-600">{error}</p>;

  // ⚠️ Empty state
  if (coins.length === 0) return <p>No coins found.</p>;

  // ✅ Success state
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Crypto Market</h2>
      <ul className="list-disc pl-5">
        {coins.map((coin) => (
          <li key={coin.id} className="mb-2">
            <strong>{coin.name}</strong>: ${coin.current_price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoCoins;
