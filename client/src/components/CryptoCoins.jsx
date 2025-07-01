import { useState, useEffect } from "react";
const CryptoCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {};

    fetchMarketData();
  });

  return (
    <div>
      <ul className="list-none">
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} - ${coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoCoins;
