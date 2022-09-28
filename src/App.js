import logo from './logo.svg';
import './App.css';
import RutinContainer from './Component/RutinContainer/RutinContainer';
import DailyInfo from './Component/DailyInfo/DailyInfo';
import { useEffect, useState } from 'react';

function App() {
  const [times,setTimes] = useState(0)

  useEffect(()=>{
    const getSpentTime=localStorage.getItem('spent-time')
    if(getSpentTime){
      setTimes(getSpentTime)
    }
  },[])

  const handleGetTimes=(time)=>{
    const getDataTime=parseFloat(times) + parseFloat(time)
    setTimes(getDataTime)
    localStorage.setItem('spent-time',getDataTime)
  }

  return (
    <div className="App bg-[#F2F4FA]">
      <RutinContainer time={times} setTimes={setTimes} handleGetTimes={handleGetTimes} />
      <DailyInfo times={times} setTimes={setTimes} />
    </div>
  );
}

export default App;
