import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeMode = {
    mode: theme,
    toggleTheme: toggleTheme
  };

  return (
    <StyledThemeProvider theme={themeMode}>{children}</StyledThemeProvider>
  );
};

export default ThemeProvider;
