import ReactDOM from "react-dom";
import TopBar from "./components/TopBar";
import Menu from "./components/Menu";

function App () {
    return (
        <>
            <TopBar />
            <Menu />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))