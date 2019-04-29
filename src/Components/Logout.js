import React, { Component } from 'react'
import { Link,Redirect } from "react-router-dom";
export default class Logout extends Component {
    constructor(props) {
        super(props)
        const token=sessionStorage.getItem("token")
      if(token===null)
      {
          loggedIn=false;
      }
        this.state = {
           loggedIn,
           firstName:this.props.firstName
        }
        localStorage.removeItem("user")
        sessionStorage.removeItem("token")
      let loggedIn=true;
      
      }
      
  render() {
    if(this.state.loggedIn===false){
        return  <Redirect to='./'/>

      }
    return (
      <div>
        <h1>thanks {this.state.firstName} sucessfully Logout</h1>
        <Link to='/'>Login</Link>
      </div>
    )
  }
}
