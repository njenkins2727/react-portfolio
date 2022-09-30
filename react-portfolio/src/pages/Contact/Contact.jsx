import React from "react";
import { validateEmail } from '../../utils/emailAuth'
import { useState } from 'react';
import './Contact.css'

function Contact() {
  const [currentState, setFormState] = useState( { name: '', email: '', message: '' } );
  const { name, email, message } = currentState;
  const [errorMessage, setErrorMessage] = useState(''); //look into this usestate function more 

  function handleChange(e) {

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Invalid email address');
        } else {
            setErrorMessage('');
          }
    } else {
        if(!e.target.value.length) {
          setErrorMessage(`${e.target.name} field is required`)
        }
      }

    setFormState({currentState, [e.target.name]: e.target.value })
      if (!errorMessage) {
        setFormState({currentState, [e.target.name]: e.target.value });
      }
  }

  function handleSubmit(e) {
      e.preventDefault();
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <h1 class="contact-header">Contact</h1>

        <div class="mb-4">
          <label htmlFor="name" class="form-label">Name:</label>
          <input type="text" name="name" class="form-control" placeholder="Ella Rodgers" defaultValue={name} onBlur={handleChange} />
        </div>

        <div class="mb-4">
          <label htmlFor="email" class="form-label">Email address:</label>
          <input type="email" name="email" class="form-control" placeholder="Ella@gmail.com" defaultValue={email} onBlur={handleChange} />
        </div>
            
        <div class="mb-4">
          <label htmlFor="message" class="form-label">Message:</label>
          <textarea name="message" class="form-control" rows="5" placeholder="your message here" defaultValue={message} onBlur={handleChange} />
        </div>

        {(
          <div>
            <p class="error-message">{errorMessage}</p>
          </div>
        )}
              
        <button type="submit" class="btn">Submit</button>
    </form>
      
     
  )
}

export default Contact;

