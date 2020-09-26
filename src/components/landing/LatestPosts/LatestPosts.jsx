import React from "react";
import LatestPostImage from "./LatestPostImage/LatestPostImage";
import { Container, Row, Col } from "react-bootstrap";
function LatestPosts({ posts, last, readMorePosts, padd }) {

  // const history = useHistory();

  
  //   const shoot = (id) => {
  //     console.log(id)
	// 	 history.push("/post/"+id);
	// 	 window.location.reload();
	// }
  
  const handleClick = () => {
    readMorePosts()
  }

  console.log(padd)

  return (

    <div>

      {/* <ul className={classes.ImageList}>
        {posts && posts.map((post, index) => (
          <li key={index} onClick={() => shoot(post.ID)} style={{ cursor: 'pointer' }}>
            <LatestPostImage post={post} />
          </li>
        ))}
      </ul> */}
      <Row>
            {posts && posts.map((item, index) => (
                <Col
                item={item ? 1: 0}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                  xl={3}
                  key={item.ID}
                >
                  <LatestPostImage post={item} padd={padd}/>
                </Col>
              ))}
          </Row>
      {!last && <div className="read-more-container">
            <button className="read-more-button" onClick={handleClick}>read more</button>
          </div>}
    </div>
  );
}

export default LatestPosts;
