import React, { Component } from 'react';
//import fire from './config/Fire';
import {  Link} from 'react-router-dom';
//import Login from './Login';



class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
            <button ><Link to="/login">Comenzar</Link></button>
            
                </div>
        );

    }

}

export default Home;