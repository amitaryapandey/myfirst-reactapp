import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
           username:'',
           password:'',
           loggedIn:false
        }
      }
      changeText=(e)=>this.setState({[e.target.name]:e.target.value});
    formSubmit=(e)=>
    {
        e.preventDefault();
        sessionStorage.setItem("token","safasfas");
        const {username,password}=this.state
       if(username==="Amit" && password==="pandey"){
            this.setState({loggedIn:true})
            var i=localStorage.getItem("login")
            if(isNaN(i)){ i=0;}
            localStorage.setItem("user",username);
            localStorage.setItem("login",++i );
            console.log("number of time login :",localStorage.getItem("login"))

        }
    }     
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/AdminPanel"/>
        }
    return (
      <div>
       <h1>Login</h1>
       <form onSubmit={this.formSubmit}>
       <div className="form-group">
      <label >Username:</label>     
      <input type="username" className="form-control" value={this.state.username} onChange={this.changeText.bind(this)} placeholder="Enter user name" name="username"/>
    </div>
    <div className="form-group">
     <label >Password:</label>
      <input type="password" className="form-control" value={this.state.password} onChange={this.changeText.bind(this)} placeholder="Enter Password" name="password"/>
   </div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
    )
  }
}