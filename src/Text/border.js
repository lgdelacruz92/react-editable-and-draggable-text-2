import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    default: {
      transform: props => {
        return `translate(${props.textData.x}px, ${props.textData.y}px)`;
      },
      padding: 10,
      display: "inline-block"
    },
    theborder: {
      border: props => `2px solid ${props.color}`,
      cursor: "move"
    }
  };
});

const Border = React.forwardRef((props, ref) => {
  const { children, edit, color, textData } = props;
  const classes = useStyles({ color, textData });

  return (
    <div
      ref={ref}
      className={`${classes.default} ${edit ? classes.theborder : ""}`}
    >
      {children}
    </div>
  );
});

export default Border;
