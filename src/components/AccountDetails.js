import React from "react";

export default function AccountDetails(props) {
  const styles ={
    display: props.formData.showPwd ? "inline-block" : "none" ,
    height: "2.5rem"
  }
  return (
    <div className="form--section" id="account-detais">
      <h2>Your Account Details</h2>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={props.handleChange}
        value={props.formData.name}
      />
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={props.handleChange}
        value={props.formData.email}
      />
      <label htmlFor="pwd">Password</label>
      <input
        type="password"
        id="pwd"
        name="password"
        onChange={props.handleChange}
        value={props.formData.password}
      />
      <div style= {styles} className="show-pwd">
        <p>{props.formData.password}</p>
      </div>
      <div className="options">
        <div>
          <input type="checkbox" name="showPwd" onChange={props.handleChange}/>
          <label>Show Password</label>
        </div>
      </div>
    </div>
  );
}
