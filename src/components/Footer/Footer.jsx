import React, { Component } from "react";
import classes from './Footer.module.css'

import SocialIcons from '../SocialIcons/SocialIcons'

import Popup from "reactjs-popup";
import './App.css';
import axios from 'axios';


class Footer extends Component {
	
	constructor(props){
		super(props);

		this.state = {
		  email : '',
		  msg : ''
		}

	}
	
	emailChange = (e) => {
		this.setState({ email : e.target.value });
	}
	
	submitForm = (e) => {
		e.preventDefault();
	   
		let obj = {
		  email : this.state.email
		}

		let self = this;

		axios.post('https://oneplanetrating.org/blog/apis/newsletter.php', JSON.stringify(obj))
		.then(function (response) {
		  // console.log(response);
		  // alert(response.data.message);
			self.setState({
			  email : '',
			  msg : response.data.message
			});

		})
		.catch(function (error) {
		  console.log(error);
		});	
		
		setTimeout(() => {
		  this.setState({ msg: '' });
		}, 5000);
		
		

	}
	
	render() {
		const isMsg = this.state.msg;
		return (
			<footer className={classes.Footer}>
				<img
					src={require("../../assets/images/city.jpeg")}
					className={classes.FooterImage}
					alt="footerImage"
				></img>
				<div className={classes.FooterContent}>
					<div className={classes.FooterSocial}>
						<p>Find Us Here</p>
						<SocialIcons color={"#fff"}/>
					</div>
					<img
						className={classes.FooterLogo}
						src={require("../../assets/images/logo_transp_text.png")}
						alt="footerLogo"
					></img>
					<div className={classes.FooterSubscribe}>
						<p>Subscribe to our</p>
						<Popup trigger={<button className={classes.FooterSubscribeButton}> Newsletter </button>} modal>
						{close => (
						  <div className="modal-custom">
							<a className="close-custom" onClick={close}>
							  &times;
							</a>
							<h1 className="header-custom"> JOIN OUR MAILING LIST </h1>
							  {isMsg ? (
								<p style={{color: "#fff"}}>{isMsg}</p>
							  ) : (
								<p style={{color: "#fff"}}>{isMsg}</p>
							  )}
							<div className="content-custom">
							  {" "}
							  <div className="container">
								<form onSubmit={this.submitForm}>
								  <div className="form-group">
									<input 
									  autoFocus 
									  type="email" 
									  className="form-control" 
									  placeholder="Email *" 
									  id="email"
									  value={this.state.email} 
									  onChange={this.emailChange}
									  required="required" />
								  </div>
								  <button type="submit" className="btn button-subscribe">Subscribe</button>
								</form>
							   </div>
							</div>
						  </div>
						)}
					  </Popup>
					</div>
				</div>
				<div>
					<p className={classes.Copyright}>
						All rights reserved &#169; One Planet Rating 2019
			  </p>
				</div>
			</footer>
		)
    }
}

export default Footer
