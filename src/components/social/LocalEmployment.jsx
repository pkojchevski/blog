import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import LatestPostImage from '../landing/LatestPosts/LatestPostImage/LatestPostImage'
import Loader from '../loader/Loader'

class LocalEmployment extends Component {
	
	constructor(props){
		super(props);
   }
	
  render() {
    
	// this.shoot = (id) => {
	// 	// alert('id = '+id);
	// 	window.location.href = "/post/"+id;
  // }
  
  const handleClick = () => {
    this.props.readMorePosts()
  }


    return (
      <>
        {!this.props.loader ? <div className="energy-container">
          <Row>
            {this.props.posts.map((item, i) => {
              return (
                <Col
                item={item ? 1: 0}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                  xl={3}
                  key={item.ID}
                >
                  <LatestPostImage post={item}/>
                </Col>
              );
            })}
          </Row>

          {!this.props.last && <div className="read-more-container">
            <button className="read-more-button" onClick={handleClick}>read more</button>
          </div>}
        </div>
  :
  <div style={{height:'100vh'}}>
  <Loader/></div>
  }
      </>
    );
  }
}

export default LocalEmployment;
