import React from "react";
import classes from "./LatestPostImage.module.css";
import { useHistory } from "react-router-dom";

function LatestPostImage({post, padd}) {

  const history = useHistory()

  const convertDate = (dateString) => {
    let arr = ['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Noe', 'Dec']
    let d = new Date(dateString);
    let dd = String(d.getDate()).padStart(2, '0');
    let mm = String(d.getMonth() + 1).padStart(2, '0'); 
    let yyyy = d.getFullYear();
    // console.log(+mm-1)
    return `${arr[+mm-1]} ${dd}, ${yyyy}`;
  }

  const shoot = (id) => {
    console.log(id)
   history.push("/post/"+id);
   window.location.reload();
}

console.log(padd)

  return (
    <div className={classes.ImageWrapper} style={{marginLeft:padd}}>
      <div style={{cursor:'pointer'}} onClick={() => shoot(post.ID)}>
      <img src={post.feature_image} alt={post.post_title}></img>
      <div className={classes.Tag}>#{post.tag}</div>
      <div className={classes.Title}>{post.post_title}</div>
      <div className={classes.Background}></div>
      {/* <p className={classes.Text}>{post.content}</p> */}
      <div className={classes.CardFooter}>
      {/* <p className={classes.Team}>{post.url}</p> */}
      <p className={classes.Date}>{convertDate(post.post_date)}</p>
      </div>
      </div>
    </div>
  );
}

export default LatestPostImage;
