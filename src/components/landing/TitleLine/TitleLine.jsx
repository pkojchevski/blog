import React from "react";
import classes from "./TitleLine.module.css";

function TitleLine({ margin, title }) {
  return (
    <div className={classes.TitleLine}>
      <div className={classes.Title} style={{ marginLeft: `${margin}` }}>
        {title}
      </div>
      <div className={classes.Line}></div>
    </div>
  );
}

export default TitleLine;
