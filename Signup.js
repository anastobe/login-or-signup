import React from 'react'
import './App.css'
import firebase from "firebase/app";
import Login from './Login'
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

class Signup extends React.Component{
    
    state={
        SignupUser: '',
        SignupPassword: ''
    }
    
    handlechange=(e, key)=>{
        this.setState({[key]: e.target.value}); 
    }
    
    HandleSignup = () => {
        const {SignupUser, SignupPassword } =  this.state
    if((!SignupUser || !SignupPassword) && (!SignupUser && !SignupPassword)) 
    {
        alert("please enter username and password signup ");
    }
    else
    {
        this.HandleFirebaseSignup();
    }
}

HandleFirebaseSignup=()=>{
    const {SignupUser, SignupPassword } =  this.state
    firebase.auth().createUserWithEmailAndPassword(SignupUser, SignupPassword)
    .then((userCredential) => {
        alert("created");
    })
    .catch((error) => {
        alert("Not Created");
    });
}

empty=()=>{
    this.form.reset() // resets "username" field to "admin"
}
render()
  { 
  return(
  <div>
   
        <Route exact path='/Login'>
            <Login />
        </Route>

   <div className="loginform">
    <form ref={form => this.form = form}>
      <h1> Signup </h1>
      <input id="gayeb" style={{margin: '2%'}} onChange={(e)=>{this.handlechange(e,'SignupUser')}} placeholder="signup username "></input> <br />
      <input id="gayeb" style={{margin: '2%'}} onChange={(e)=>{this.handlechange(e,'SignupPassword')}} placeholder="signup password "></input> <br /> 
    </form>
    <button onClick={() => {this.HandleSignup(); this.empty();}}>Signup </button> <a href='/Login'>  Login  </a>
    </div>
    
    </div>  

  )};
};

export default Signup;