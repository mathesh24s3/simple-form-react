import React from "react";
import AccountDetails from "./components/AccountDetails";
import PersonalDetails from "./components/PersonalDetails";
import VerificationForm from "./components/Verification";
import Preference from "./components/Preference";
import ContactsSync from "./components/ContactsSync";
import Feedback from "./components/Feedback";
import "./styles.css";

export default function App() {
  const [formData , setFormData] = React.useState({
    name:"" ,
    email: "" ,
    password:"",
    showPwd: false,
    dob: "",
    age:"",
    verifyThrough:"" ,
    preference: [],
    contactSync:"",
    feedback: "" ,
    agreeTerms: false
  })

  function handleChange(event) {
    const {name  , value , type , checked} = event.target;
    setFormData(prevFormData => (
      {
        ...prevFormData ,
        [name]: (type==="checkbox" && name!=="preference") ? checked: (name==="preference" ? (checked ? [...prevFormData.preference , value] : prevFormData.preference.filter(pref=> pref!=value )): value)
      }
    ))
   }

   function handleSubmit(event){
    event.preventDefault();
    console.log("Form Successfully Submited" ,`Submitted form:` , formData)
   }

  return (
    <form onSubmit={handleSubmit}>
      <AccountDetails handleChange={handleChange} formData= {formData}/>
      <PersonalDetails handleChange={handleChange} formData= {formData}/>
      <hr/>
      <VerificationForm handleChange={handleChange} formData= {formData}/>
      <hr/>
      <Preference handleChange={handleChange} formData= {formData}/>
      <hr/>
      <ContactsSync handleChange={handleChange} formData= {formData}/>
      <Feedback handleChange={handleChange} formData= {formData}/>
      <div className="terms-checkbox">
        <input type="checkbox" id="terms" name="agreeTerms" onChange={handleChange}/> 
        <label htmlFor="terms">Agree with our terms</label>
      </div>
      
      <button>Submit</button>
    </form>
  );
}
