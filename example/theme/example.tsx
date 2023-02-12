import React from "react";
import { SimplyProvider, SimplyUseData } from "simply-context";

const ThemeSwitcher = () => {
  const [theme, setTheme] = SimplyUseData("theme");
  const handleToggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      <button onClick={handleToggle}>
        Switch to the theme {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

const App = () => (
  <SimplyProvider initialState={{ theme: "light" }}>
    <ThemeSwitcher />
  </SimplyProvider>
);
