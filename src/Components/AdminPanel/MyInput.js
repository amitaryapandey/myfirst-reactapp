import React from 'react'

const MyInput=(props)=> {
  return (
    <div className="form-group">
     <input required type={props.type} className="form-control" value={props.email} onChange={props.change} name={props.name}/>
   </div>
  )
}
export default MyInput;

