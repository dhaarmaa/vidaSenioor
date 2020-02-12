import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import fire from './config/Fire';
import Home from './Home';
import Post from './Post';
import Login from './Login';



class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
          this.setState({ user: null });
          localStorage.removeItem('user');
        }
    });
  }
  render() {
    return (
     <div>
       <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/home" component={ Home } />
        {/* <Route path="/registerandlogin" component={ RegisterAndLogin }/> */}
        {/* <Route path="/register" component={ Register }/> */}
        <Route path="/post" component={ Post }/>
        {/* <Route path="/profile" component={ Profile }/> */}
      </Switch>
    
   </Router>
   {this.state.user ?  ( <Post/>) : (<Login />)}
   </div>
      
    
    )  
  }
}

 export default App;

