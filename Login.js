import React from 'react'
import './App.css'
import firebase from "firebase/app";
import Signup from "./Signup";
import "firebase/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


var firebaseConfig = {
  apiKey: "AIzaSyC6tMfpVMSHxJYpjZoxVVhUYddROU8zScw",
  authDomain: "loginsignup-a7761.firebaseapp.com",
  projectId: "loginsignup-a7761",
  storageBucket: "loginsignup-a7761.appspot.com",
  messagingSenderId: "834177065106",
  appId: "1:834177065106:web:1ed9f678fa8a6b9173464b"
};
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

class Login extends React.Component{

  state={
   LoginUser: '',
   LoginPassword: ''
  }

  handlechange=(e, key)=>{
    this.setState({[key]: e.target.value}); 
  }

  HandleLogin = () => {
    const {LoginUser, LoginPassword } =  this.state
    if(!LoginUser || !LoginPassword) 
    {
      alert("please enter username and password login ");
    }
    else
    {
      this.HandleFirebaseLogin();
    }
  }
  
  HandleFirebaseLogin = () =>{
    const {LoginUser, LoginPassword } =  this.state
    firebase.auth().signInWithEmailAndPassword(LoginUser, LoginPassword)
    .then((userCredential) => {
      alert(" Successfully Login ");
    })
    .catch((error) => {
      alert(" login fail ");
    });
  }
  
  empty2=()=>{
    this.form.reset()
  }

  render()
  { 
  return(
<Router>

<Switch>
  <Route exact path='/Signup'>
    <Signup />
  </Route>
</Switch>

<div>
    <div className="loginform">
    <form ref={form => this.form = form}>
      <h1> Login </h1>
      <input id="gayeb" style={{margin: '2%'}} onChange={(e)=>{this.handlechange(e,'LoginUser')}} placeholder="Login username "  ></input> <br />
      <input id="gayeb" style={{margin: '2%'}} onChange={(e)=>{this.handlechange(e,'LoginPassword')}} placeholder="Login password " ></input> <br />
    </form> 
      <button onClick={()=> {this.HandleLogin(); this.empty2();}} > Login </button> <a href='/Signup' > SignUp </a>
    </div>  

  </div>

  </Router>
  )};
};

export default Login;