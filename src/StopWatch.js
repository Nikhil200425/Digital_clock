import {useState,useEffect,useRef} from "react";

export default function StopWatch()
{
	const ref = useRef();
	const [time,setTime] = useState({ms:0, s:0, m:0, h:0});
	const [interv,setInterv] = useState();
	
	const Start = () => {
		run();
		setInterv(setInterval(run,10));
	};
	var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
	const run = () => {
		if(updatedM === 60){
			updatedH++;
			updatedM = 0;
		}
		if(updatedS === 60){
			updatedM++;
			updatedS = 0;
		}
		if(updatedMs === 100){
			updatedS++;
			updatedMs = 0;
		}
		updatedMs++;
		return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
	}

	const Stop = () => {
		clearInterval(interv);
	}

	const Reset = () => {
		clearInterval(interv);
		setTime({ms:0, s:0, m:0, h:0});
	}

	return(
		<>
		<center>
		<div style={{marginTop:"170px"}}>
		<h1>{time.h} : {time.m} : {time.s} : {time.ms} </h1>
		<button onClick={Start}>Start</button>&nbsp;
		<button onClick={Stop}>Stop</button>&nbsp;
		<button onClick={Reset}>Reset</button>
		</div>
		</center>
		</>
	);
	}