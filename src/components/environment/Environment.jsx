import React, { Component } from "react";
import Maldives from "../../assets/photos/maldives.jpg";
// import "../blog.css";
import Energy from "./Energy";

import axios from 'axios';

class Environment extends Component {
  state = {
    topic: 1,
    title: "ENVIRONMENTAL",
  data: [],
  last:false,
  page:2,
  postsPerPage:8,
  posts:[],
  loader:false
  };
  
  filterSubcategory = (slug, topic_id, name) => {
   
	// alert(slug);
	
	let self = this;
		
 		axios.get('https://oneplanetrating.org/blog/apis/environmental.php?subcategory_name='+slug)
	    .then(function (response) {
	      console.log(response.data);
		  
		   self.setState({
			   topic: topic_id,
			   title: name,
            data : response.data,
            posts:8 < response.data.length ? response.data.slice(0, 8) : response.data,
            last: 8 < response.data.length ? false : true,
	        });
		  
	    })
	    .catch(function (error) {
	      console.log(error);
	    });
   
  };

  componentDidMount = () => {
    this.setState({
      title: "environmental",
    });
  };

  handleEnergy = () => {
    this.setState({
      topic: 1,
      title: "energy",
    });
  };
  handleWater = () => {
    this.setState({
      topic: 2,
      title: "water",
    });
  };
  handleWaste = () => {
    this.setState({
      topic: 3,
      title: "waste",
    });
  };
  handleFood = () => {
    this.setState({
      topic: 4,
      title: "food",
    });
  };
  handleTransport = () => {
    this.setState({
      topic: 5,
      title: "transport",
    });
  };
  handlePollution = () => {
    this.setState({
      topic: 6,
      title: "pollution",
    });
  };
  handleConservation = () => {
    this.setState({
      topic: 7,
      title: "conservation",
    });
  };
  handleCertifications = () => {
    this.setState({
      topic: 8,
      title: "certifications",
    });
  };
  
  componentDidMount = () => {
    // this.setState({
      // title: "cultural",
    // });

		let self = this;
		self.setState({loader:true})
 		axios.get('https://oneplanetrating.org/blog/apis/environmental.php?subcategory_name=environmental')
	    .then(function (response) {
	      console.log(response.data);
		  
		   self.setState({
            data : response.data,
            posts:8 < response.data.length ? response.data.slice(0, 8) : response.data,
            last: 8 < response.data.length ? false : true,
            loader:false
	        });
		  
	    })
	    .catch(function (error) {
	      console.log(error);
	    });
	
  };

  readPosts = () => {
    let posts=[];
    let {data, last, page, postsPerPage} = this.state;
    let first = page * postsPerPage
    if(first < data.length-1) {
      posts = data && data.slice(0, first)
      page = page + 1;
    } else {
      posts = data && data.slice(0, data.length-1);
      last = true;
    }
    this.setState({page, posts, last})
  }

  render() {
    const displayTopicViews = () => {
      return (
        <>
          {this.state.topic === 1 ? (
            <Energy posts={this.state.posts} readMorePosts={this.readPosts} 
            last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 2 ? (
            <Energy posts={this.state.posts} readMorePosts={this.readPosts} 
            last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 3 ? (
            <Energy posts={this.state.posts} readMorePosts={this.readPosts}
             last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 4 ? (
            <Energy posts={this.state.posts} readMorePosts={this.readPosts} 
            last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 5 ? (
            <Energy posts={this.state.posts} readMorePosts={this.readPosts}
             last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 6 ? (
            <Energy posts={this.state.posts} readMorePosts={this.readPosts}
             last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 7 ? (
            <Energy posts={this.state.posts} readMorePosts={this.readPosts} 
            last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 8 ? (
            <Energy posts={this.state.posts} readMorePosts={this.readPosts} 
            last={this.state.last} loader={this.state.loader}/>
          ) : (
                            ""
                          )}
        </>
      );
    };

    return (
      <>
        <div>
          <img src={Maldives} alt="cultural" className="cultural-topic-image" />
          <div className="environmental-transparent-title">
            {this.state.title}
          </div>
          <div className="button-group">
            <button onClick={() => this.filterSubcategory("energy",1,"Energy")} className="categ-buttons">
              energy
            </button>
            <button onClick={() => this.filterSubcategory("water",2,"Water")} className="categ-buttons">
              water
            </button>
            <button onClick={() => this.filterSubcategory("waste",3,"Waste")} className="categ-buttons">
              waste
            </button>
            <button onClick={() => this.filterSubcategory("food",4,"Food")} className="categ-buttons">
              food
            </button>
            <button onClick={() => this.filterSubcategory("transport",5,"Transport")} className="categ-buttons">
              transport
            </button>
            <button onClick={() => this.filterSubcategory("pollution",6,"Pollution")} className="categ-buttons">
              pollution
            </button>
            <button onClick={() => this.filterSubcategory("conservation",7,"Conservation")} className="categ-buttons">
              conservation
            </button>
            <button onClick={() => this.filterSubcategory("certification",8,"certification")} className="categ-buttons" > 
				certifications 
			</button>
          </div>
          <div>{displayTopicViews()}</div>
        </div>
      </>
    );
  }
}

export default Environment;
