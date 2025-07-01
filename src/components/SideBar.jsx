import ThemeToggle from "./ThemeToggle";

const SideBar = () => {
  return (
    <aside>
      <h2 className="text-3xl md:text-base font-semibold mb-6">Quick Links</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>

          {/* <li>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
