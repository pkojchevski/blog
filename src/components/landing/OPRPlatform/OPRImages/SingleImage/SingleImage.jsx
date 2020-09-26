import React from "react";
import classes from "./SingleImage.module.css";

function SingleImage({ image, title, text }) {
  return (
    <div className={classes.SingleImage}>
      <img className={classes.Image} src={image} alt="OPRImage"></img>
      <p className={classes.Title}>{title}</p>
      <p className={classes.Text}>{text}</p>
    </div>
  );
}

export default SingleImage;
