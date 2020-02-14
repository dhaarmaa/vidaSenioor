import React, { Component } from 'react';
import fire from './config/Fire';
import Post from './Post';
import EditAndDelatePost  from './EditAndDelatePost';
import logo from './img/logo.png';


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
            <div>
            <header>
            <img src={logo} className="logo-wall"/>
            <h1>VidaSenioor</h1>
            </header>
            <div className="home-text">Nombre de usuario</div> 
          
    
                  
                    <Post/>
                    <EditAndDelatePost/>
                    
                    <button onClick={this.logout}>Cerrar Sesión</button>
                </div>
        );

    }

}

export default Wall;
