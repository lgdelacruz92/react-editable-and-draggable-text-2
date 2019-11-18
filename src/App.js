import React from "react";
import "./App.css";
import Text from "./Text/text";

function App() {
  let texts = [];
  for (let i = 0; i < 400; i++) {
    texts.push({ id: `unique-${i}` });
  }
  return (
    <div className="App">
      {texts.map(text => (
        <Text textData={text} key={text.id} />
      ))}
    </div>
  );
}

export default App;
