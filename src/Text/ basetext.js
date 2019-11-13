import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    text: {
      outline: "none"
    }
  };
});

const BaseText = props => {
  const { children, textStyle, onClick, edit } = props;
  const spanRef = React.useRef(null);
  const classes = useStyles(edit);

  return (
    <span
      ref={spanRef}
      id="text-draggable"
      onClick={onClick}
      className={`${classes.text} ${textStyle || ""}`}
      contentEditable={edit}
      suppressContentEditableWarning={true}
    >
      {children}
    </span>
  );
};

export default BaseText;
