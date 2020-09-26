import React from "react";
import classes from "./MenuImage.module.css";

function MenuImage({ image, text }) {
  return (
    <div className={classes.MenuImage}>
      <div className={classes.Inner}>
        <div
          className={classes.Image}
          style={{ background: `url(${image})` }}
        />
      </div>
      <p className={classes.Text}>{text}</p>
    </div>
  );
}

export default MenuImage;
