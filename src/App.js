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
        <div> Generated Color: {color} </div>
      </div>
      <button onClick={() => setColor(randomColor())}>Generate</button>
      {/* Controlled component */}
      {/* <input
        // 2. Use state variable
        value={emojiName}
        // 3. Update the state variable
        onChange={(event) => {
          setEmojiName(event.currentTarget.value);
          const chosenEmoji = nodeEmoji.find(event.currentTarget.value).emoji;
          if (chosenEmoji) {
            // if emoji exists...
            setEmoji(chosenEmoji);
            // then it updates the state
            console.log();
          }
        }} */}
      {/* /> */}
    </div>
  );
}

export default App;
