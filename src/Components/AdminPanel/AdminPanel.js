import React, { Component } from 'react';
import MyInput from './MyInput';
import { Link,Redirect } from "react-router-dom";
class AdminPanel extends Component {
 constructor(props){
   super(props)
   const token=sessionStorage.getItem("token")
   let loggedIn=true;
   if(token===null)
   {
       loggedIn=false;
   }
   this.state={
      employeeCode:'',
      firstName:'',
      salary:'',
      age:'',
      data:[],
      loggedIn
   }
 }
 formSub=(e)=>{
   e.preventDefault();
   const {employeeCode,firstName,salary,age,data}=this.state;
   const dataObj={
     employeeCode,
     firstName,
     salary,
     age
   }
   data.push(dataObj);
   this.setState({data});
   console.log(data);
   e.target.reset();
     };
 submitForm=(e)=>this.setState({[e.target.name]:e.target.value});
renderTable=()=>{
  const dataTable=this.state.data.map((d,i)=>{
    return(
      <tr key={i}>
      <td>{i+1}</td>
      <td>{d.employeeCode}</td>
      <td>{d.firstName}</td>
      <td>{d.salary}</td>
      <td>{d.age}</td>
      </tr>
    )
  })
  return dataTable;
}
render() {
  if(this.state.loggedIn===false){
    return  <Redirect to='./'/>
  }
  return (
    <div className="App">
    <h1>Welcome {localStorage.getItem("user")} to your admin page</h1>
      <h2>Admin Panel</h2>
       <h6>Number of time you loggedIn:{localStorage.getItem("login")}</h6>
      <Link to='/logout'>Logout</Link>
      <form onSubmit={this.formSub.bind(this)}>
        <div className="form-group">
          <label >Employee code:</label>
          <MyInput type="number" className="form-control" value={this.state.employeeCode} change={this.submitForm} placeholder="Enter employee code" name="employeeCode"/>
        </div>
        <div className="form-group">
          <label >Name:</label>
          <MyInput type="text" className="form-control" value={this.state.firstName} change={this.submitForm} placeholder="Enter FirstName" name="firstName"/>
        </div>
        <div className="form-group">
          <label >Age</label>
          <MyInput type="number" className="form-control" value={this.state.age} change={this.submitForm} placeholder="Enter Age" name="age"/>
        </div>
        <div className="form-group">
          <label >Salary:</label>
          <MyInput type="number" className="form-control" value={this.state.salary} change={this.submitForm} placeholder="Enter salary" name="salary"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <table className="table table-striped">
    <thead>
      <tr>
        <th>Srl-No</th>
        <th>EmployeeCode</th>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>{this.renderTable()}</tbody>
    </table>
     </div>
   );
 }
}

export default AdminPanel;