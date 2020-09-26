import React from "react";
import classes from "./OPRPlatfrom.module.css";
import OPRImages from "./OPRImages/OPRImages.jsx";

function OPRPLatform() {
  return (
    <div className={classes.OPRPlatform}>
      <div className={classes.OPRPlatformImage}></div>
      <div className={classes.ContentWrapper}>
        <div className={classes.LogoWrapper}>
          <img
            className={classes.LogoBg}
            src={require("../../../assets/images/globe.png")}
            alt="LogoBg"
          ></img>
        </div>
        <div className={classes.TextWrapper}>
          <h2 className={classes.TextHeader}>
            JOIN <span>THE</span>
            <span>MOVEMENT</span>
          </h2>
          <p className={classes.TextParagraph}>
            Do you like what we are doing. Sign up and start rating, earn up to
            500 points on your first Sign Up.
          </p>
          <button onClick={(event) =>  window.open('https://oneplanetrating.org/accounts/register/')} className={classes.Button}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default OPRPLatform;
