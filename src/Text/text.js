import React from "react";
import BaseText from "./ basetext";
import Border from "./border";
import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp
} from "./eventHandler";
import TextControls from "./textcontrols";
import "./text.css";

const Text = props => {
  const [edit, setEdit] = React.useState(false);
  const [textData, setTextData] = React.useState(props.textData);

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
      setEdit(s => e.target.classList.contains(textData.id));
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
  }, [textData.id]);

  return (
    <div className="App">
      <TextControls
        onBoldClick={() => {
          setTextData({
            ...textData,
            fontWeight: textData.fontWeight === "bold" ? "normal" : "bold"
          });
        }}
        onItalicClick={() => {
          setTextData({
            ...textData,
            fontStyle: textData.fontStyle === "italic" ? "normal" : "italic"
          });
        }}
        onUnderlineClick={() => {
          setTextData({
            ...textData,
            textDecoration:
              textData.textDecoration === "underline" ? "none" : "underline"
          });
        }}
        onFontSizeSelect={e => {
          setTextData({
            ...textData,
            fontSize: parseInt(e.target.value)
          });
        }}
        onFontFamilySelect={e => {
          setTextData({
            ...textData,
            fontFamily: e.target.value
          });
        }}
        textData={textData}
        edit={edit}
      />
      <Border edit={edit} ref={borderRef} textData={textData} color="lightgrey">
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
};

export default Text;
