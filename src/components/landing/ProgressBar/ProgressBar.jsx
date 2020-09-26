import React from "react";
import classes from "./ProgressBar.module.css";
import { useHistory } from "react-router-dom";
function ProgressBar({ posts }) {
  const history = useHistory();
  
   const shoot = (id) => {
		 history.push("/post/"+id);
		 window.location.reload();
	}
  
  return (
    <div className={classes.TimelineWrapper} >
      <div className={classes.Timeline}></div>
      {posts.map((post, index) => (
        <div className={classes.Node} key={index} >
          <p className={classes.NodeFeatured}>Featured Article</p>
          <p className={classes.NodeTitle} style={{ cursor: 'pointer' }} onClick={() => shoot(post.ID)}>{post.title}</p>
        </div>
      ))
      }
    </div >
  );
}

export default ProgressBar;
