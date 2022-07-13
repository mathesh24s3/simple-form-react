import React from "react";

export default function Feedback(props) {
    return (
        <div className="form--section" id="contact-sync">
            <h2>
           Feedback
            </h2>
            <h4>Your Feedback</h4>
            <textarea name="feedback" onChange={props.handleChange} value={props.formData.feedback}></textarea>
        </div>
    )
}