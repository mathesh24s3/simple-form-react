import React from "react";

export default function ContactsSync(props) {
    return (
        <div className="form--section" id="contact-sync">
            <h2>
                Contacts Sync
            </h2>
            <h3>Do you want to sync your contacts ?</h3>
            <select name="contactSync" onChange={props.handleChange}>
                <option value="Yes">I want to</option>
                <option value="No">I don't want to</option>
            </select>
        </div>
    )
}