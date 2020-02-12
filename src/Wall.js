import React, { Component } from 'react';
import fire from './config/Fire';
import Post from './Post';
import Walls from './Home';


class Wall extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div><h1>Welcome to Wall</h1>
          
    
                  
                    <Post/>
                    <Walls/>
                    <button onClick={this.logout}>Cerrar Sesión</button>
                </div>
        );

    }

}

export default Wall;