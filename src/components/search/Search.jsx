import React, { Component } from "react";
import sunrise from "../photos/sunrise.jpg";
import CulturalInteractions from "./CulturalInteractions";
import axios from 'axios';
import qs from 'query-string';
import { withRouter } from 'react-router-dom';

let history = null;
class Search extends Component {
	
	constructor(props){
		super(props);
		 this.state = {
			search:"",
			data: [],
			posts:[],
			last:false,
			loader:false
		  };
      history = this.props.history
		}


componentDidMount() {

	const self = this;
		const parsed = qs.parse(this.props.location.search);
	    const search_data = parsed.s;
	
	self.setState({loader:true})
	 axios.get('https://oneplanetrating.org/blog/apis/search-posts.php?s='+search_data)
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
		history.listen((location, action) => {
			const parsed = qs.parse(location.search);
		const search_data = parsed.s;
		
		self.setState({loader:true})
 		axios.get('https://oneplanetrating.org/blog/apis/search-posts.php?s='+search_data)
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
	})
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
   
   let comp;

    if (search_data && search_data != "") {

      comp = ""

    } else {

      comp = <h1 style={{textAlign:'center'}}>Please enter some search string</h1>

    }

    return (
      <>
        <div>
          <img src={sunrise} alt="cultural" className="cultural-topic-image" />
          <div className="cultural-transparent-title">Search Result : {search_data}</div>
          <div>
		  {this.state.data && this.state.data.length > 0 &&
			<CulturalInteractions posts={this.state.posts} readMorePosts={this.readPosts} 
			last={this.state.last} loader={this.state.loader} />
		  }
		  {comp}
		  </div>
        </div>
      </>
    );
  }
}

export default withRouter(Search);
