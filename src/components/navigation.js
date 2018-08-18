// https://mock-the-week.herokuapp.com/api


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default log">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Mock The Week</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Food Jokes</Link>
          </li>
          <li>
           <Link to="/celebrityjokes">Celebrity Jokes</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/login">Log In</Link></li>
          { /* <li><button className="btn btn-danger log">Log out </button></li> */}
          <li><Link to="/register">Sign Up</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;