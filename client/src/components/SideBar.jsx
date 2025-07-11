import { Link } from "react-router-dom";
// import ThemeToggle from "./ThemeToggle";
import Weather from "./Weather";
import Dollar from "./Dollar";

const SideBar = () => {
  return (
    <aside className="w-full md:w-[260px] bg-white rounded-xl shadow p-4 flex flex-col gap-6">
      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Quick Links</h2>
        <nav>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                className="block hover:text-pink-600 transition duration-200"
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-pink-600 transition duration-200"
              >
                👤 About
              </Link>
            </li>
            <li>
              {/* <Link
                to="/projects"
                className="block hover:text-pink-600 transition duration-200"
              >
                💻 Projects
              </Link> */}
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-pink-600 transition duration-200"
              >
                ✉️ Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Extras */}
      <div>
        <h4 className="text-xl font-semibold text-pink-500 mb-3">Extras</h4>
        <div className="space-y-4">
          <div className="bg-pink-100 p-4 rounded-lg shadow">
            <Weather />
          </div>
          <div className="bg-pink-100 p-4 rounded-lg shadow">
            <Dollar />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
