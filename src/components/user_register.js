


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './navigation';
import axios from 'axios';
import {BASE_URL} from '../Constants/constants';


class Register extends Component{

	constructor(props){
		super(props);
		this.register = this.register.bind(this);

		this.state = {
			email : '' ,
			password : '' 
		}
	}

	handle_email_change(event){
		this.setState({
		    email : event.target.value
		})
	}
	handle_password_change(event){
		this.setState({
		    password : event.target.value
		})
	}

	register(){

		axios.post(BASE_URL + '/user/register', {
		    email: this.state.email,
		    password: this.state.password
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	render(){
		return(
	
		<div>
		 <Nav />
			<div className="container col-lg-4">
			  <h2>User Register</h2>

			    <div className="form-group">
			      <label htmlFor="email">Email:</label>
			      <input type="email" className="form-control" value = {this.state.email} onChange = {(e) => {this.handle_email_change(e)}} />
			    </div>
			    <div className="form-group">
			      <label htmlFor="pwd">Password:</label>
			      <input type="password" className="form-control" value = {this.state.password} onChange = {(e) => {this.handle_password_change(e)}}/>
			    </div>
			    <button type="submit" className="btn btn-default" onClick = {this.register}>Submit</button>

			</div>
		</div>
	  )
	}
}

export default Register;
