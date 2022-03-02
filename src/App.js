import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import MinesweeperPage from "./minesweeper/MinesweeperPage";
import { lightTheme } from "./theme";
import { GlobalStyle } from "./globalStyle";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Normalize />
        <GlobalStyle />
        <MinesweeperPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
