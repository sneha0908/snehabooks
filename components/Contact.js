import React, { useState } from "react";
import axios from 'axios'
const Contact = () => {
  const [email,setEmail]=useState('')
  const push= () => {
    axios.post('http://localhost:5000/register', {  email })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
     
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Which Books You Want<br></br> To Read?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button className="secondary-button" onClick={push}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;