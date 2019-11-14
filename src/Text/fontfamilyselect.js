import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import Fonts from "./config.json";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    fontSizeSelection: {
      display: "inline-block",
      marginLeft: 3
    },
    select: {
      height: "2.5em",
      outline: "none",
      marginBottom: 3
    }
  };
});

const FontFamilySelect = props => {
  const { textData, onFontFamilySelect } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.fontSizeSelection, textData.id)}>
      <select
        className={clsx(textData.id, classes.select)}
        onChange={onFontFamilySelect}
      >
        {Fonts.fonts.map(font => (
          <option selected={font.name === "Roboto"} value={font.style}>
            {font.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontFamilySelect;
