import React, { useState } from "react";
import classes from "./OPRImages.module.css";

import SingleImage from "./SingleImage/SingleImage";

function OPRImages() {
  const [images, setImages] = useState([
    {
      imgUrl: "./images/f1.png",
      title: "#Activities",
      text: "Kayaking in Copenhagen",
    },
    {
      imgUrl: "./images/f1.png",
      title: "#Activities",
      text: "Kayaking in Copenhagen",
    },
    {
      imgUrl: "./images/f1.png",
      title: "#Activities",
      text: "Kayaking in Copenhagen",
    },
    {
      imgUrl: "./images/f1.png",
      title: "#Activities",
      text: "Kayaking in Copenhagen",
    },
  ]);
  return (
    <div className={classes.Images}>
      <div className={classes.ImagesWrapper}>
        {images.map((image, index) => (
          <SingleImage
            key={index}
            image={image.imgUrl}
            title={image.title}
            text={image.text}
          />
        ))}
      </div>
    </div>
  );
}

export default OPRImages;
