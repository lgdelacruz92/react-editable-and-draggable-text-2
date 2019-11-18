import React from "react";
import "./App.css";
import Text from "./Text/text";

function App() {
  let texts = { id: "unique-1" };
  const textRef = React.useRef();

  return (
    <div className="App">
      <Text textData={texts} onUpdate={() => {}} ref={textRef} />
    </div>
  );
}

export default App;
