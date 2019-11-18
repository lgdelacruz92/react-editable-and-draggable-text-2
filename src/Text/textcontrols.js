import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import FontStyles from "./fontstyles";
import FontSizeSelect from "./fontsizeselect";
import FontFamilySelect from "./fontfamilyselect";
import FontColor from "./fontcolor";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    textControls: {
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
      <FontFamilySelect {...props} />
      <FontColor {...props} />
    </div>
  );
};

export default TextControls;
