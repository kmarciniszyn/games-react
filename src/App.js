import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import GameInstruction from "./common/GameInstruction";
import MinesweeperPage from "./minesweeper/MinesweeperPage";
import Navigation from "./Navigation";
import { toMinesweeper, toInstruction } from "./routes";


const App = () => (
    <HashRouter
        basename="/games"
    >
        <Navigation />

        <Switch>
            <Route path={toMinesweeper()}>
                <MinesweeperPage />
            </Route>
            <Route path={toInstruction()}>
                <GameInstruction />
            </Route>
            <Route path="/games">
                <Redirect to={toMinesweeper()} />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;
