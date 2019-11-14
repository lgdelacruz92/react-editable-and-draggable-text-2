import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import FontStyles from "./fontstyles";
import FontSizeSelect from "./fontsizeselect";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    textControls: {
      transform: props => {
        return `translate(${props.textData.x}px, ${props.textData.y}px)`;
      },
      display: "flex",
      alignItems: "center"
    },
    transparent: {
      opacity: 0,
      pointerEvents: "none"
    }
  };
});

const TextControls = props => {
  const { textData, edit } = props;
  const classes = useStyles({ textData });
  return (
    <div
      className={clsx(
        classes.textControls,
        { [classes.transparent]: !edit },
        textData.id
      )}
    >
      <FontStyles {...props} />
      <FontSizeSelect {...props} />
    </div>
  );
};

export default TextControls;
