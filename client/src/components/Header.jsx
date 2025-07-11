import { Link, useNavigate } from "react-router-dom";
import Clock from "./Clock";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch(
        "https://rest-express-api-production.up.railway.app/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (res.ok) {
        navigate("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-pink-600 text-white px-6 py-4 shadow-md">
      {/* Brand + Clock */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="bg-pink-200 text-pink-800 font-bold px-4 py-2 rounded shadow hover:bg-pink-300 transition">
          Crypto Coins
        </button>
        <Clock />
      </div>

      {/* Navigation */}
      <nav className="w-full md:w-auto mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
          <li>
            <Link
              to="/"
              className="block bg-pink-800 hover:bg-pink-900 transition px-4 py-2 rounded text-white font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block bg-pink-800 hover:bg-pink-900 transition px-4 py-2 rounded text-white font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-pink-800 hover:bg-pink-900 transition px-4 py-2 rounded text-white font-medium"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
