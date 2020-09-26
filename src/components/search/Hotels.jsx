import React, { Component } from "react";
import sunrise from "../photos/sunrise.jpg";
import CulturalInteractions from "./CulturalInteractions";
import axios from 'axios';
import qs from 'query-string';

class Hotels extends Component {
	
	constructor(props){
		super(props);
		
		 this.state = {
			search:"",
			data: [],
			last:false,
			page:2,
			postsPerPage:8,
			posts:[],
			loader:false
		  };
		}
	componentDidMount() {
		const parsed = qs.parse(this.props.location.search);
		const search_data = parsed.s;

		let self = this;
		self.setState({loader:true})
 		axios.get('https://oneplanetrating.org/blog/apis/hotels.php')
	    .then(function (response) {
			
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


	}

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
   
   const parsed = qs.parse(this.props.location.search);
   const search_data = parsed.s;

    return (
      <>
        <div>
          <img src={sunrise} alt="cultural" className="cultural-topic-image" />
          <div className="cultural-transparent-title">Hotels</div>
          <div>
			<CulturalInteractions posts={this.state.posts} readMorePosts={this.readPosts} 
			last={this.state.last} loader={this.state.loader}/>
		  </div>
        </div>
      </>
    );
  }
}

export default Hotels;
