import React from "react";
import "./App.css";
import BaseText from "./Text/ basetext";

function App() {
  const [edit, setEdit] = React.useState(false);
  const textRef = React.useRef();

  const textData = {
    x: 50,
    y: 60,
    fontSize: 50,
    fontFamily: "sans-serif",
    fontWeight: "Bold",
    text: "Hello World"
  };

  React.useEffect(() => {
    const onClick = e => {
      if (e.target !== textRef.current) {
        setEdit(false);
      }
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="App">
      <BaseText
        ref={textRef}
        textData={textData}
        edit={edit}
        onClick={() => setEdit(true)}
      />
    </div>
  );
}

export default App;
