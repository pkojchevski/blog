import React, { useState } from "react";
import classes from "./FeaturedTopic.module.css";
import FeaturedTopicImage from "./FeaturedTopicImage/FeaturedTopicImage";

function FeaturedTopic() {
  const [featuredTopics, setFeaturedTopics] = useState([
    {
      title: "Environment",
      imgUrl: "./images/Environmental.png",
    },
    { title: "Social", imgUrl: "./images/social.png" },
    { title: "Cultural", imgUrl: "./images/cultural.png" },
  ]);

  return (
    <div className={classes.Featured}>
      {featuredTopics.map((featured, index) => (
        <a href={`/${featured.title.toLowerCase()}`} key={index}>
          <FeaturedTopicImage featured={featured} />
        </a>
      ))}
    </div>
  );
}

export default FeaturedTopic;
