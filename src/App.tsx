import React from "react";
import baseTheme from "./themes";
import {ThemeProvider} from "styled-components";

const App: React.FC = () => {
  return <ThemeProvider theme={baseTheme}></ThemeProvider>;
};

export default App;
