import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";

function App(): JSX.Element {
    return(
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <MainDash />
                <RightSide/>
            </div>
        </div>
    )
}

export default App;