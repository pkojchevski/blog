import React, { Component } from "react";
import sunrise from "../photos/sunrise.jpg";
// import "../blog.css";
import Architecture from "./Architecture";
import CulturalHeritage from "./CulturalHeritage";
import CulturalInteractions from "./CulturalInteractions";
import LocalCulture from "./LocalCulture";
import IllegalTrade from "./IllegalTrade";
import Landscape from "./Landscape";
import axios from 'axios';

class Cultural extends Component {
  state = {
    topic: 1,
    title: "cultural",
    data: [],
    last:false,
    page:2,
    postsPerPage:8,
    posts:[],
    loader:false
  };

  filterSubcategory = (slug, topic_id, name) => {
	let self = this;
 		axios.get('https://oneplanetrating.org/blog/apis/cultural.php?subcategory_name='+slug)
	    .then(function (response) {
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
  
  
  handleCulturalInteractions = () => {
    this.setState({
      topic: 1,
      title: "cultural interactions",
    });
  };
  handleCulturalHeritage = () => {
    this.setState({
      topic: 2,
      title: "cultural heritage",
    });
  };
  handleLocalCulture = () => {
    this.setState({
      topic: 3,
      title: "local culture",
    });
  };
  handleIllegalTrade = () => {
    this.setState({
      topic: 4,
      title: "illegal trade",
    });
  };
  handleLandscape = () => {
    this.setState({
      topic: 5,
      title: "landscape",
    });
  };
  handleArchitecture = () => {
    this.setState({
      topic: 6,
      title: "architecture",
    });
  };

  componentDidMount = () => {
    let self = this;
    self.setState({loader:true})
 		axios.get('https://oneplanetrating.org/blog/apis/cultural.php?subcategory_name=cultural')
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
            <CulturalInteractions posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 2 ? (
            <CulturalInteractions posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 3 ? (
            <CulturalInteractions posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 4 ? (
            <CulturalInteractions posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 5 ? (
            <CulturalInteractions posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 6 ? (
            <CulturalInteractions posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : (
                        ""
                      )}
        </>
      );
    };

    return (
      <>
        <div>
          <img src={sunrise} alt="cultural" className="cultural-topic-image" />
          <div className="cultural-transparent-title">{this.state.title}</div>
          <div className="button-group">
		  
            <button onClick={() => this.filterSubcategory("cultural_interactions",1,"Cultural Interactions")} className="categ-buttons" >
              cultural interactions
            </button>
            <button onClick={() => this.filterSubcategory("cultural_heritage",2,"Cultural Heritage")} className="categ-buttons" >
              cultrural heritage
            </button>
            <button onClick={() => this.filterSubcategory("local_culture",3,"Local Culture")} className="categ-buttons">
              local culture
            </button>
            <button onClick={() => this.filterSubcategory("illegal_trade",4,"Illegal Trade")} className="categ-buttons">
              illegal trade
            </button>
            <button onClick={() => this.filterSubcategory("landscape",5,"Landscape")} className="categ-buttons">
              landscape
            </button>
            <button onClick={() => this.filterSubcategory("architecture",6,"Architecture")} className="categ-buttons">
              architecture
            </button>
			
          </div>
          <div>{displayTopicViews()}</div>
        </div>
      </>
    );
  }
}

export default Cultural;
