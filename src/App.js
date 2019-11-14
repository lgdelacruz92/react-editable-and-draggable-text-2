import React from "react";
import "./App.css";
import Text from "./Text/text";

function App() {
  const textData = {
    id: "unique-id-123",
    x: 50,
    y: 60,
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    textAlign: "center",
    text: "Hello World",
    event: {
      x: 0,
      y: 0,
      originalX: 0,
      originalY: 0,
      status: "mouse-up"
    }
  };

  return (
    <div className="App">
      <Text textData={textData} />
    </div>
  );
}

export default App;
