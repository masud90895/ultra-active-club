import logo from './logo.svg';
import './App.css';
import RutinContainer from './Component/RutinContainer/RutinContainer';
import DailyInfo from './Component/DailyInfo/DailyInfo';
import { useState } from 'react';

function App() {
  const [times,setTimes] = useState(0)

  console.log(times);
  return (
    <div className="App bg-[#F2F4FA]">
      <RutinContainer time={times} setTimes={setTimes}/>
      <DailyInfo times={times} setTimes={setTimes} />
    </div>
  );
}

export default App;
