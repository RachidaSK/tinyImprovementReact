import React, { Component } from 'react';
import Naviguation from '../../components/login/Navbar';
import Registration from '../../components/login/Jumbotron';
import * as $ from 'axios';


class Homepage extends Component {
  state = {
    email: "",
    password: "",
    FirstName: "",
    LastName: "",
    email1: "",
    password1: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignup = (event) => {
    event.preventDefault();
    $.post('/api/user', {
      firstName: this.state.FirstName,
      lastName: this.state.LastName,
      email: this.state.email1,
      password: this.state.password1
    }).then((data) => {
      console.log("success");
      console.log(data);
    })

  }

  handleLogin = (event) => {
    event.preventDefault();
    console.log("login clicked");
    $.post("/api/session", {
      email: this.state.email,
      password: this.state.password
    }).then((response) => {
      console.log(response)
      if (response.data[0]._id) {
        sessionStorage.setItem('token', response.data[0]._id)
        window.location.href = "/kudos";
      }
    })
  }


  render() {
    return (
      <div>
        <Naviguation 
          handleChange ={this.handleChange} 
          handleEvent = {this.handleLogin}
          emailValue = {this.state.email}
          pwValue={this.state.password}

        />
        <Registration 
          handleChange ={this.handleChange}
          handleEvent = {this.handleSignup}
          fnValue = {this.state.FirstName} 
          lnValue = {this.state.LastName}
          email1Value = {this.state.email1}
          pw1Value = {this.state.password1}
        />
      </div>
    );
  }
}

export default Homepage;