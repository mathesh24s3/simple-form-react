import React from "react";

export default function PersonalDetails({handleChange , formData}) {
  return (
    <div className="form--section" id="personal-details">
      <h2>Your Personal Details</h2>
      <label htmlFor="DOB">Date of Birth</label>
      <input type="date" id="DOB" name="dob" onChange={handleChange} value={formData.dob}/>
      <label htmlFor="age">Age</label>
      <input type="number" id="age" name="age" onChange={handleChange} value={formData.age}/>
    </div>
  );
}
