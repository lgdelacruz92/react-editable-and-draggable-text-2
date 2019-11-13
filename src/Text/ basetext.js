import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    text: {
      outline: "none",
      display: "inline-block",
      transform: props => `translate(${props.x}px, ${props.y}px)`,
      fontSize: props => props.fontSize,
      fontFamily: props => props.fontFamily,
      fontWeight: props => props.fontWeight,
      cursor: "text"
    }
  };
});

const BaseText = React.forwardRef((props, ref) => {
  const { textData, className, onClick, edit } = props;
  const classes = useStyles(textData);

  return (
    <span
      ref={ref}
      id="text-draggable"
      onClick={onClick}
      className={`${classes.text} ${className || ""}`}
      contentEditable={edit}
      suppressContentEditableWarning={true}
    >
      {textData.text}
    </span>
  );
});

export default BaseText;
