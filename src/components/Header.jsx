import { Link, useNavigate } from "react-router-dom";
import Weather from "./Weather";
import Dollar from "./Dollar";
import Clock from "./Clock";

// import '../styles/header.css'
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") {
      console.log("loging out!");
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <header className="flex flex-col md:flex-row justify-between text-2xl md:text-base bg-pink-600 p-4">
      <div className="hidden md:block">
        <button className="bg-pink-200 m-4 border-2  p-1">
          <strong>Crypto Coins</strong>
        </button>
        <Clock />
      </div>

      <nav>
        <ul className="flex justify-end m-4 items-center list-none gap-8 pr-2.5   ">
          <li className="bg-pink-950 text-white  border-2 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-pink-950 text-white  border-2 p-2">
            <Link to="/about">About</Link>
          </li>
          <li>
            <button
              className="bg-pink-950 text-white  border-2 p-2"
              onClick={handleLogout}
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
