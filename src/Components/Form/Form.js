import React, { Component } from 'react'
import MyInput from './MyInput';
export default class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          firstName:'',
          lastName:'',
          age:'',
          gender:'',
          course:'',
          data:[]
        }
      }
      
  render() {
    return (
      <div>
         <form onSubmit={this.formSubmit.bind(this)}>
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
      </div>
    )
  }
}
