import { useState,useEffect } from "react";

export default function Alarm()
{
	const [time,setTime] = useState(new Date().toLocaleTimeString());
	const [atime,setAtime] = useState();
	const [alarmSet,setAlarmSet] = useState(false);

	const hAtime = (event) => {setAtime(event.target.value)}
	
	useEffect(() => {
		const timer = setInterval(() => {
			setTime(getFormattedTime());
		},1000);
	return () => {
		clearInterval(timer);
	}
	},[]);
	
	function getFormattedTime() {
  		const currentDate = new Date();
  		const hours = currentDate.getHours();
  		const minutes = currentDate.getMinutes();
  		const seconds = currentDate.getSeconds();

  	return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
	}

	function padZero(number) {
  		return number.toString().padStart(2, '0');
	}

	const setAlarm = () => {
		setAlarmSet(true);
	};

	const resetAlarm = () => {
		setAlarmSet(false);
		setAtime("");
	}
	
	useEffect(() => {
		if(time == atime){
			alert("Alarm ringing!!!");
			setAtime("");
			setAlarmSet(false);
		}
	},[time,atime,alarmSet]);


	return(
	<>
	<center>
	<h1>{time}</h1>
	<h1>Alarm</h1>
	<input type = "time" value={atime} onChange={hAtime} disabled={alarmSet}step="1"/>
	<br/><br/>
	<button onClick={setAlarm}>Set Alarm</button>&nbsp;
	<button onClick={resetAlarm}>Reset Alarm</button>
	</center>
	</>
	);
}
