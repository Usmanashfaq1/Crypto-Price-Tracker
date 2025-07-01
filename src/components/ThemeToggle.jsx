// src/components/ThemeToggle.jsx
import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="block text-gray-700 hover:text-blue-500"
      onClick={toggleTheme}
    >
      {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default ThemeToggle;
