import React from "react";
import "./App.css";
import BaseText from "./Text/ basetext";
import Border from "./Text/border";
import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp
} from "./Text/eventHandler";

function App() {
  const [edit, setEdit] = React.useState(false);
  const [textData, setTextData] = React.useState(() => {
    return {
      x: 50,
      y: 60,
      fontSize: 20,
      fontFamily: "sans-serif",
      fontWeight: "Bold",
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
  });

  const textRef = React.useRef();
  const borderRef = React.useRef();

  React.useEffect(() => {
    const onMouseDown = e => {
      if (e.target === borderRef.current) {
        setTextData(s => handleMouseDown(s, e));
      }
    };
    const onMouseMove = e => {
      setTextData(s => handleMouseMove(s, e));
    };
    const onMouseUp = e => {
      setTextData(s => handleMouseUp(s, e));
    };

    const onClick = e => {
      if (e.target !== textRef.current && e.target !== borderRef.current) {
        setEdit(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className="App">
      <Border
        edit={edit}
        ref={borderRef}
        textData={textData}
        color="lightcoral"
      >
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
