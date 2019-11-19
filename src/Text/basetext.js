import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    text: {
      outline: "none",
      display: "inline-block",
      fontSize: props => props.fontSize,
      fontFamily: props => props.fontFamily,
      fontWeight: props => props.fontWeight,
      fontStyle: props => props.fontStyle,
      textDecoration: props => props.textDecoration,
      textAlign: props => props.textAlign,
      color: props => props.color,
      cursor: "text",
      border: "none",
      resize: "none",
      background: "transparent"
    }
  };
});

const BaseText = React.forwardRef((props, ref) => {
  const { textData, className, onClick, edit } = props;
  const classes = useStyles(textData);

  console.log("Base text edit", edit);

  return (
    <span
      ref={ref}
      id="text-draggable"
      onClick={onClick}
      className={`${textData.id} ${classes.text} ${className || ""}`}
      contentEditable={edit}
      suppressContentEditableWarning={true}
    >
      {textData.text}
    </span>
  );
});

export default BaseText;
