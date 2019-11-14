import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";

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

const FontSizeSelect = props => {
  const { textData, onFontSizeSelect } = props;
  const classes = useStyles();
  let options = [];
  for (let i = 8; i < 20; i++) {
    options.push(i);
  }
  for (let i = 20; i < 80; i += 4) {
    options.push(i);
  }
  return (
    <div className={clsx(classes.fontSizeSelection, textData.id)}>
      <select
        className={clsx(textData.id, classes.select)}
        onChange={onFontSizeSelect}
      >
        {options.map((option, i) => (
          <option key={i} className={clsx(textData.id)} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSizeSelect;
