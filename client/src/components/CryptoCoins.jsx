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

// Register Chart.js modules
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

  // Fetch coins on mount
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          "https://rest-express-api-production.up.railway.app/api/crypto/prices",
          {
            credentials: "include",
          }
        );

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

  // Prepare data for chart
  const labels = coins.map((coin) => coin.name);
  const prices = coins.map((coin) => coin.current_price);

  const data = {
    labels,
    datasets: [
      {
        label: "Current Price (USD)",
        data: prices,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Current Prices of Top Coins",
        color: "#333",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      legend: {
        position: "top",
        labels: {
          color: "#555",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#555",
        },
      },
      x: {
        ticks: {
          color: "#555",
        },
      },
    },
  };

  // 💬 UI States
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px] text-pink-600 font-semibold">
        ⏳ Loading crypto data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 bg-red-100 border border-red-300 px-4 py-3 rounded max-w-md mx-auto mt-6 text-center">
        ❌ {error}
      </div>
    );
  }

  if (coins.length === 0) {
    return (
      <div className="text-gray-600 text-center mt-6">⚠️ No coins found.</div>
    );
  }

  // ✅ Main UI
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
        Crypto Market Overview
      </h2>

      <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-700">
        {coins.map((coin) => (
          <li key={coin.id}>
            <strong>{coin.name}</strong>: ${coin.current_price.toLocaleString()}
          </li>
        ))}
      </ul>

      <div className="w-full overflow-x-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CryptoCoins;
