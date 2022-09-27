import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('#00FFFF');
  return (
    <div>
      <h1>Random Color Generator</h1>
      <div
        style={{
          width: 400,
          height: 400,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSiye: 80,
          backgroundColor: color,
        }}
      >
        Generated Color:
        {color}
      </div>
      <button onClick={() => setColor(randomColor())}>Generate</button>
    </div>
  );
}

export default App;
