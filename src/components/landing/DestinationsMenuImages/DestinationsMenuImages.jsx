import React from "react";

import MenuImage from "./MenuImage/MenuImage";
import classes from "./DestinationsMenuImages.module.css";

import Thailand from "../../../assets/images/c1.png";
import Canada from "../../../assets/images/c2.png";
import Italy from "../../../assets/images/c3.png";

function DestinationsMenuImages() {
  return (
    <div className={classes.Images}>
      <MenuImage image={Thailand} text="Thailand" />
      <MenuImage image={Canada} text="Canada" />
      <MenuImage image={Italy} text="Italy" />
    </div>
  );
}

export default DestinationsMenuImages;
