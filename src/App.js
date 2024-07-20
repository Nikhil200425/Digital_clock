import logo from './logo.svg';
import './App.css';
import Clock from "./Clock";
import NavBar from "./NavBar";
import StopWatch from "./StopWatch";
import WorldClock from "./WorldClock";
import CountDown from "./CountDown";
import Alarm from "./Alarm";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
	<BrowserRouter>
		<NavBar/>
	
		<Routes>
			<Route path ="/" element={<Clock/>}/>
			<Route path ="/stopwatch" element={<StopWatch/>}/>
			<Route path ="/worldclock" element={<WorldClock/>}/>
			<Route path ="/countdown" element={<CountDown/>}/>
			<Route path ="/alarm" element={<Alarm/>}/>
			<Route path ="*" element={<Clock/>}/>
		</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
