import React from "react";
import classes from "./FeaturedTopicImage.module.css";

function FeaturedTopicImage({ featured }) {
  return (
    <div className={classes.ImageWrapper}>
      <div
        className={classes.Image}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(38,132,173, 0.3), rgba(38,132,173, 0.3)),url(${featured.imgUrl})`,
        }}
      ></div>
      <div className={classes.Title}>{featured.title}</div>
    </div>
  );
}

export default FeaturedTopicImage;
