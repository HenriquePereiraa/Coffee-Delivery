import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { CoffeeCartContextProvider } from "./context/CoffeeContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeCartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </CoffeeCartContextProvider>
    </ThemeProvider>
  );
}

export default App;
