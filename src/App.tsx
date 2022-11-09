import { useState, useEffect } from 'react'
import './App.css';
import Main from './pages/Main'
import VoidFissures from './pages/VoidFissures'
import Nightwave from './pages/Nightwave'
import WorldstateTypes from './worldstateTypes';


function App() {
  const [apiData, setApiData] = useState<WorldstateTypes | undefined>(undefined)

  useEffect(() => {
    const apiUrl: string = 'https://api.warframestat.us/pc'
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, [])

  function logger() {
    console.log(apiData)
    console.log(typeof apiData)
  }

  return (
    <div className="App">
      <h1>Warframe Worldstate Tracker</h1>
      {apiData && <Main data={apiData} />}
      {apiData && <VoidFissures data={apiData} />}
      {apiData && <Nightwave data={apiData} />}
      <button onClick={logger}>Logger</button>
    </div>
  );
}

export default App;
