import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

  const labels = coins.map((coin) => coin.name);
  const prices = coins.map((coin) => coin.current_price);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Current Price (USD)",
        data: prices,
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Current Prices of Top Coins",
      },
    },
  };

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
      <div className="pt-2">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CryptoCoins;
