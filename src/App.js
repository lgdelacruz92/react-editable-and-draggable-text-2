import React from "react";
import "./App.css";
import Text from "./Text/text";

function App() {
  const texts = [{ id: "unique-123" }, { id: "unique-124" }];

  return (
    <div className="App">
      {texts.map(text => (
        <Text textData={text} />
      ))}
    </div>
  );
}

export default App;
