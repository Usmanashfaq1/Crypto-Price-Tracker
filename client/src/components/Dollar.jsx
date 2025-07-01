import { useEffect, useState } from "react";

const Dollar = () => {
  const [dollar, setDollar] = useState("null");

  useEffect(() => {
    const fetchUsDollar = async () => {
      console.log("fetching curreny");
      const res = await fetch(
        `https://api.currencyapi.com/v3/latest?apikey=cur_live_YA86jDoith56nDdz8crTgZ8TMJ1gJe4DOAQTKVyH&currencies=PKR`
      );
      const result = await res.json();

      setDollar(result.data.PKR.value.toFixed(2));
    };

    fetchUsDollar();
  }, []);

  return (
    <span className="bg-amber-50 m-4 border-2  p-1">
      US-DOLLAR : <strong>{dollar}</strong> Rupees
    </span>
  );
};

export default Dollar;
