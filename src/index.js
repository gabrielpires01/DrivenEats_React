import ReactDOM from "react-dom";
import TopBar from "./components/TopBar";
import BotBar from "./components/BotBar";

function App () {
    return (
        <>
            <TopBar />
            <BotBar />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))