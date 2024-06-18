import React from 'react';

function Contact() {
  return (
    <div className = "contact">
      <h2> Contact Us </h2>
      <form> 
        <label > 
          Your E-mail : 
            <input type = "email" name = "email" required />
        </label>
        <label>
          Your Message :
            <textarea name = "message" required> </textarea>
        </label>
        <button> SUBMIT </button>
      </form>
    </div>
  )
}

export default Contact;


