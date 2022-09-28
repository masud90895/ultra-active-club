import logo from './logo.svg';
import './App.css';
import RutinContainer from './Component/RutinContainer/RutinContainer';
import DailyInfo from './Component/DailyInfo/DailyInfo';

function App() {
  return (
    <div className="App bg-[#F2F4FA]">
      <RutinContainer/>
      <DailyInfo/>
    </div>
  );
}

export default App;
