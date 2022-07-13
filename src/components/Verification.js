import React from "react";

export default function VerificationForm(props) {
  return (
    <div id="verification" className="form--section">
      <h2>Verification</h2>
      <h4>How should we verify your account ?</h4>
      <div className="options">
        <div>
          <input type="radio" id="verify-sms" name="verifyThrough" onChange={props.handleChange} value="SMS"/>
          <label htmlFor="verify-sms">Verify through SMS</label>
        </div>
        <div>
          <input type="radio" id="verify-email" name="verifyThrough" onChange={props.handleChange} value="email"/>
          <label htmlFor="verify-email">Verify through email</label>
        </div>
        <div>
          <input type="radio" id="verify-call" name="verifyThrough" onChange={props.handleChange} value="call"/>
          <label htmlFor="verify-call">Verify through phonecall</label>
        </div>
      </div>
    </div>
  );
}
