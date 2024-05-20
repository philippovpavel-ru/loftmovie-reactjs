import { createContext, useState, useMemo, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error("useTheme должен быть внутри ThemeContextProvider");
  }

  return themeContext;
};
