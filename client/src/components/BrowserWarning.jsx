import { useEffect, useState } from "react";

const BrowserWarning = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isSafari =
      ua.includes("safari") &&
      !ua.includes("chrome") &&
      !ua.includes("android");

    const isInAppBrowser =
      ua.includes("fbav") || // Facebook
      ua.includes("instagram") || // Instagram
      ua.includes("twitter"); // Twitter

    if (isSafari || isInAppBrowser) {
      setShowWarning(true);
    }
  }, []);

  if (!showWarning) return null;

  return (
    <div className="bg-yellow-100 text-yellow-800 text-sm text-center px-4 py-3 mt-4 rounded-md max-w-xl mx-auto">
      ⚠️ Due to browser limitations, this app may not function correctly on
      Safari or in-app browsers (e.g., Facebook, Instagram). Please use Chrome
      or Firefox for the best experience!
    </div>
  );
};

export default BrowserWarning;
