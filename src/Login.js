import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import fire from './config/Fire';
//import Post from './Post';
import './style.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      name: '',
      email: '',
      password: '',
    
    };
 
  }



  

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(  this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
        <div className="col-md-6" id="container">
          <div ><h1>VidaSenioor</h1></div>
          <form>
          <div class="form-group">
              <label for="exampleInputName">Nombre o apodo</label>
              <label for="exampleInputName" className="option">(solo es necesario para el registro)</label>
              <input value={this.state.name} onChange={this.handleChange} type="name" name="name" class="input-name" placeholder="Ingrese su nombre o apodo" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Correo</label>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su correo" />
              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="input-password" placeholder="Ingrese su contraseña" />
            </div>

              <button type="submit" onClick={this.login} class="btn btn-primary">Iniciar Sesión</button>
              <button onClick={this.signup}  className="btn btn-success">Registrarse</button>
            
          </form>
        </div>
    );
  }
}
export default Login;