import React from "react";
import BaseText from "./basetext";
import Border from "./border";
import TextControls from "./textcontrols";
import * as MaterialUI from "@material-ui/core";
const translate = (x, y) => {
  return `translate(${x}px, ${y}px)`;
};

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    text: {
      position: "absolute",
      transform: props => translate(props.x, props.y)
    }
  };
});

const Text = React.forwardRef((props, ref) => {
  const { textData, onUpdate } = props;
  if (typeof textData.id === "undefined") {
    throw Error(
      "Text id is required. Please add a Text id i.e { id: unique-id, ...}"
    );
  }
  const [edit, setEdit] = React.useState(false);
  const [event, setEvent] = React.useState({
    x: 0,
    y: 0,
    originalX: 0,
    originalY: 0,
    status: "mouse-up"
  });
  const [theTextData, setTextData] = React.useState({
    id: textData.id,
    x: textData.x || 0,
    y: textData.y || 0,
    fontSize: textData.fontSize || 16,
    fontFamily: textData.fontFamily || "sans-serif",
    fontWeight: textData.fontWeight || "normal",
    fontStyle: textData.fontStyle || "normal",
    textDecoration: textData.textDecoration || "none",
    textAlign: textData.textData || "center",
    text: textData.text || "Default Text",
    color: textData.color || "black"
  });
  const classes = useStyles(theTextData);

  const textRef = React.useRef();
  const borderRef = React.useRef();

  React.useEffect(() => {
    const onMouseDown = e => {
      if (e.target === borderRef.current && event.status === "mouse-up") {
        setEvent({
          x: e.clientX,
          y: e.clientY,
          originalX: theTextData.x,
          originalY: theTextData.y,
          status: "mouse-down"
        });
      }
    };
    const onMouseMove = e => {
      if (event.status === "mouse-down") {
        setTextData(s => ({
          ...s,
          x: event.originalX + e.clientX - event.x,
          y: event.originalY + e.clientY - event.y
        }));
      }
    };
    const onMouseUp = e => {
      if (event.status === "mouse-down") {
        setEvent(s => ({ ...s, status: "mouse-up" }));
      }
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
  }, [
    textData.id,
    event.status,
    event.originalX,
    event.originalY,
    event.x,
    event.y,
    theTextData.x,
    theTextData.y
  ]);

  React.useEffect(() => {
    if (textRef) {
      ref.current = textRef.current.getBoundingClientRect();
      onUpdate();
    }
  });

  return (
    <div className={classes.text}>
      <TextControls
        onBoldClick={() => {
          setTextData({
            ...theTextData,
            fontWeight: theTextData.fontWeight === "bold" ? "normal" : "bold"
          });
        }}
        onItalicClick={() => {
          setTextData({
            ...theTextData,
            fontStyle: theTextData.fontStyle === "italic" ? "normal" : "italic"
          });
        }}
        onUnderlineClick={() => {
          setTextData({
            ...theTextData,
            textDecoration:
              theTextData.textDecoration === "underline" ? "none" : "underline"
          });
        }}
        onFontSizeSelect={e => {
          setTextData({
            ...theTextData,
            fontSize: parseInt(e.target.value)
          });
        }}
        onFontFamilySelect={e => {
          setTextData({
            ...theTextData,
            fontFamily: e.target.value
          });
        }}
        onFontColorChange={e => {
          setTextData({
            ...theTextData,
            color: e.target.value
          });
        }}
        textData={theTextData}
        edit={edit}
      />
      <Border
        edit={edit}
        ref={borderRef}
        textData={theTextData}
        color="lightgrey"
      >
        <BaseText
          ref={textRef}
          textData={theTextData}
          edit={edit}
          onClick={() => setEdit(true)}
        />
      </Border>
    </div>
  );
});

export default Text;
