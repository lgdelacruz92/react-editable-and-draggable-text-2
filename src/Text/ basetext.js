import React from "react";
import * as MaterialUI from "@material-ui/core";
import TextareaAutosize from "react-autosize-textarea";

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
  const { textData, className, onClick, onChange } = props;
  const classes = useStyles(textData);

  return (
    <TextareaAutosize
      ref={ref}
      id="text-draggable"
      onClick={onClick}
      onChange={onChange}
      className={`${textData.id} ${classes.text} ${className || ""}`}
      defaultValue={textData.text}
    ></TextareaAutosize>
  );
});

export default BaseText;
