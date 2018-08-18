import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';

import CelebrityJokes from './components/celebrity_jokes';
import FoodJokes from './components/food_jokes';
import Login     from './components/user_login';
import Register     from './components/user_register';

import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';


const Root = () => {
  return (
    <div className="container">
      <Router>
      	<Switch>

      		<Route path="/celebrityjokes" component={CelebrityJokes}/>
          <Route path="/login" component={Login}/>

          <Route path="/register" component={Register}/>
	        <Route exact path="/" component={FoodJokes}/>

	        
	    </Switch>
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'))
