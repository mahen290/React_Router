import React from 'react';

function Contact() {
  return (
    <div className = "contact">
      <h2> Contact Us </h2>
      <form> 
        <label> Your E-mail : </label>
            <input type = "email" name = "email" required />
        <label> Your Message : </label>
            <textarea name = "message" required> </textarea>
        <button> SUBMIT </button>
      </form>
    </div>
  )
}

export default Contact;


