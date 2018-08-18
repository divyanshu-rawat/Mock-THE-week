


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './navigation';


class Login extends Component{
	render(){
		return(
	
		<div>
		 <Nav />
			<div className="container col-lg-4">
			  <h2>User Login</h2>

			    <div className="form-group">
			      <label htmlFor="email">Email:</label>
			      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
			    </div>
			    <div className="form-group">
			      <label htmlFor="pwd">Password:</label>
			      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
			    </div>
			    <button type="submit" className="btn btn-default">Submit</button>

			</div>
		</div>
	  )
	}
}

export default Login;