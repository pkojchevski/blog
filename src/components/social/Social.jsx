import React, { Component } from "react";
import storehousetown from "../photos/storehousetown.jpg";
// import "../blog.css";
import LocalEmployment from "./LocalEmployment";
import axios from 'axios';

class Social extends Component {
  state = {
    topic: 1,
    title: "Social",
  data: [],
  last:false,
  page:2,
  postsPerPage:8,
  posts:[],
  loader:false
  };
  
  filterSubcategory = (slug, topic_id, name) => {
	let self = this;
 		axios.get('https://oneplanetrating.org/blog/apis/social.php?subcategory_name='+slug)
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

  handleLocalEmployment = () => {
    this.setState({
      topic: 1,
      title: "local employment",
    });
  };
  handleLocalSourcing = () => {
    this.setState({
      topic: 2,
      title: "local sourcing",
    });
  };
  handleExploitation = () => {
    this.setState({
      topic: 3,
      title: "exploitation",
    });
  };
  handleFairWork = () => {
    this.setState({
      topic: 4,
      title: "fair work",
    });
  };
  handleEquality = () => {
    this.setState({
      topic: 5,
      title: "equality",
    });
  };
  handleAccessibility = () => {
    this.setState({
      topic: 6,
      title: "accessibility",
    });
  };
  handleCommunitySupport = () => {
    this.setState({
      topic: 7,
      title: "community support",
    });
  };

 componentDidMount = () => {
    // this.setState({
      // title: "cultural",
    // });

		let self = this;
		self.setState({loader:true})
 		axios.get('https://oneplanetrating.org/blog/apis/social.php?subcategory_name=social')
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
            <LocalEmployment posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 2 ? (
            <LocalEmployment posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 3 ? (
            <LocalEmployment posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 4 ? (
            <LocalEmployment posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 5 ? (
            <LocalEmployment posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 6 ? (
            <LocalEmployment posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : this.state.topic === 7 ? (
            <LocalEmployment posts={this.state.posts} readMorePosts={this.readPosts} last={this.state.last} loader={this.state.loader}/>
          ) : (
                          ""
                        )}
        </>
      );
    };

    return (
      <>
        <div>
          <img
            src={storehousetown}
            alt="cultural"
            className="cultural-topic-image"
          />
          <div className="social-transparent-title">{this.state.title}</div>
          <div className="button-group">
		  
            <button onClick={() => this.filterSubcategory("local_employment",1,"Local Employment")} className="categ-buttons" >
              local employment
            </button>
            <button onClick={() => this.filterSubcategory("local_sourcing",2,"Local Sourcing")} className="categ-buttons" >
              local sourcing
            </button>
            <button onClick={() => this.filterSubcategory("exploitation",3,"Exploitation")} className="categ-buttons">
              exploitation
            </button>
            <button onClick={() => this.filterSubcategory("fair_work",4,"Fair Work")} className="categ-buttons">
              fair work
            </button>
            <button onClick={() => this.filterSubcategory("equality",5,"Equality")} className="categ-buttons">
              equality
            </button>
            <button onClick={() => this.filterSubcategory("accessibility",6,"Accessibility")} className="categ-buttons" >
              accessibility
            </button>
            <button onClick={() => this.filterSubcategory("community_support",7,"Community Support")} className="categ-buttons" >
              community support
            </button>
			
          </div>
          <div>{displayTopicViews()}</div>
        </div>
      </>
    );
  }
}

export default Social;
