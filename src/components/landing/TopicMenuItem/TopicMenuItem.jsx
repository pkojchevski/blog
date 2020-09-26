import React from "react";
import classes from "./TopicMenuItem.module.css";

function TopicMenuItem({ text1, text2, children }) {
  return (
    <div className={classes.MenuItem}>
      <span className={classes.Text1}>{text1}</span>
      <span style={{ color: "green" }}>{children}</span>
      <span className={classes.Text2}>{text2}</span>
    </div>
  );
}

export default TopicMenuItem;
