import React, {useEffect, useState} from 'react';
import Clock from "react-clock"
import 'react-clock/dist/Clock.css';
import "./TimeCheckGMK.css"

const TimeCheckGMK = () => {
    const [value, setValue] = useState(new Date());
    
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [time, setTime] = useState()
  const [timeList, setTimeList] = useState([])

  const saveSetTime = () => {
    const thisDate = new Date().toLocaleTimeString();
    setTime(thisDate)
    setTimeList([...timeList, time])
  }
  const theTimeStamps = timeList.map((t) => <li>{t}</li>)

  const [toggleMode, setToggleMode] = useState(true)
  const darkOrBrightMode = () => {
    setToggleMode(!toggleMode)
  }
  return (
    <div >
      <button onClick={darkOrBrightMode}>bright or dark</button>
    <div className={toggleMode ? "bright" : "timeCheck"}>
      <p>Current time:</p>
      <div className={toggleMode ? "clock" : "white"}>
        <Clock value={value}/>
        </div>
      <button className='clockBtn' onClick={saveSetTime}>Save set Time</button>
      <ul className='list'>
        {theTimeStamps}
      </ul>
    </div>
    </div>
  );
}

export default TimeCheckGMK;

