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
        setTextData(s => ({
          ...s,
          event: {
            x: e.clientX,
            y: e.clientY,
            originalX: s.x,
            originalY: s.y,
            status: "mouse-down"
          }
        }));
      }
    };
    const onMouseMove = e => {
      setTextData(s => {
        if (s.event.status === "mouse-down") {
          return {
            ...s,
            x: e.clientX - s.event.x + s.event.originalX,
            y: e.clientY - s.event.y + s.event.originalY
          };
        } else {
          return { ...s };
        }
      });
    };
    const onMouseUp = e => {
      setTextData(s => ({ ...s, event: { x: 0, y: 0, status: "mouse-up" } }));
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
