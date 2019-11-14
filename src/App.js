import React from "react";
import "./App.css";
import BaseText from "./Text/ basetext";
import Border from "./Text/border";

function App() {
  const [edit, setEdit] = React.useState(false);
  const [textData, setTextData] = React.useState(() => {
    return {
      x: 50,
      y: 60,
      fontSize: 50,
      fontFamily: "sans-serif",
      fontWeight: "Bold",
      text: "Hello World"
    };
  });

  const textRef = React.useRef();
  const borderRef = React.useRef();

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
      <Border edit={edit} ref={borderRef} textData={textData} color="red">
        <BaseText
          ref={textRef}
          textData={textData}
          edit={edit}
          onClick={() => setEdit(true)}
          onChange={e => setTextData({ ...textData, text: e.target.value })}
        />
      </Border>
    </div>
  );
}

export default App;
