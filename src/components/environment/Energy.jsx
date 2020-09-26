import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../blog.css";
import maldives from "../../assets/photos/maldives.jpg";
import borabora from "../../assets/photos/borabora.jpg";
import oiasantorini from "../../assets/photos/oiasantorini.jpg";
import storehousetown from "../../assets/photos/storehousetown.jpg";
import veniceitaly from "../../assets/photos/veniceitaly.jpg";
import sunrise from "../../assets/photos/sunrise.jpg";
import lighthouse from "../../assets/photos/lighthouse.jpg";
import hamburg from "../../assets/photos/hamburg.jpg";
import LatestPostImage from "../landing/LatestPosts/LatestPostImage/LatestPostImage";
import Loader from "../loader/Loader"

class Energy extends Component {
	
	constructor(props){
		super(props);
   }
	
	
  render() {


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
                  // style={{ margin: 0, padding: 0 }}
                >
                   <LatestPostImage post={item}/>
                  {/* <div className="cultural-categ-container">
                    <img
                      className="energy-grid-image"
                      src={item.feature_image}
                      alt="energy"
                    />
                    <div className="energy-tag" style={{width:"150px"}}>{item.tag}</div>
                    <div className="energy-topic">{item.post_title}</div>
                    <div className="energy-team-date">
                      <div className="energy-team">{item.url}</div>
                      <div className="energy-date">{item.post_date}</div>
                    </div>
                  </div> */}
                </Col>
              );
            })}
          </Row>

          {!this.props.last && (<div className="read-more-container">
            <button className="read-more-button" onClick={handleClick}>read more</button>
          </div>
          ) 
        }
        </div>
        :
        <div style={{height:'100vh'}}>
        <Loader/></div>
  }
      </>
    );
  }
}

export default Energy;
