// src/hooks/useTheme.js
import useThemeStore from "../stores/themeStore";

const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return { theme, toggleTheme };
};

export default useTheme;
