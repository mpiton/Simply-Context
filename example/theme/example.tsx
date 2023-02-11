import React from "react";
import { simplyProvider, simplyUseData } from "simply-context";

const ThemeSwitcher = () => {
  const [theme, setTheme] = simplyUseData("theme");
  const handleToggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      <button onClick={handleToggle}>
        Switch to the theme {theme === "light" ? "sombre" : "clair"}
      </button>
    </div>
  );
};

const App = () => (
  <simplyProvider initialState={{ theme: "light" }}>
    <ThemeSwitcher />
  </simplyProvider>
);
