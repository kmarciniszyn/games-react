import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { lightTheme } from "./theme";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Normalize />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
