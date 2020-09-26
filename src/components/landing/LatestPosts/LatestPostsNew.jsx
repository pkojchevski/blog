import React from "react";
import classes from "./LatestPosts.module.css";
import LatestPostImage from "./LatestPostImage/LatestPostImage";
import { useHistory } from "react-router-dom";

function LatestPosts({ posts, removeButton }) {

  const history = useHistory();
  const goToPost = () => {
    console.log('clicked')
    history.push("/post");
  }

  const handleClick = () => {
    this.props.readMorePosts()
  }

  return (
    <div>
      <ul className={classes.ImageList}>
        {posts.map((post, index) => (
          <li key={index} onClick={goToPost} style={{ cursor: 'pointer' }}>
            <LatestPostImage post={post} />
          </li>
        ))}
      </ul>
      {!last && <div className={classes.ButtonWrapper}>
        <button className={classes.Button} onClick={handleClick}>READ MORE</button>
      </div>}
    </div>
  );
}

export default LatestPosts;
