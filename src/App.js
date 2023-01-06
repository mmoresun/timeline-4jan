import './App.css';
import { useState } from 'react';
import Timeline from './components/Timeline';
import Inputs from './components/Inputs';


function App() {

  const [params, setParams] = useState({
    startTime: 100,
    endTime: 500,
    eventTime: 255,
    width: 800
    
  });

  return (
    <div className="App">
      <Timeline
        params={params}
        setParams={setParams}
      />
      <Inputs
        setParams={setParams}
        params={params}
      />
    </div>
  );
}

export default App;
