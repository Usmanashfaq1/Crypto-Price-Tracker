import { useEffect } from "react";
import useTheme from "../hooks/useTheme";

const ThemeProvider = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return children;
};

export default ThemeProvider;
