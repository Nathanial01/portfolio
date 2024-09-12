import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact">
      <dev>
        <img src="/contact-us-5795988-4849052.png" alt="Contact Us" />
        <form className="contact-form"><br></br>
<p> Als u geïnteresseerd bent in hoe ik kan bijdragen aan uw team, zou ik graag met u in contact komen. Ik ben ervan overtuigd dat mijn vaardigheden, enthousiasme en inzet aanzienlijke waarde zullen toevoegen en het succes van uw projecten zullen bevorderen.
      </p><br/>
          <h2>Contact me</h2><br></br>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="submit-button">Submit</button>
          <p>
        Alternatively, you can reach me via:
      </p>
      <p>
        <a href="facetime:+31648245519" className="video-link" style={{ marginBottom: '20px', display: 'inline-block', marginRight: '20px' }}>
          <FontAwesomeIcon icon={faVideo} className="video-icon" />&nbsp;&nbsp;
          FaceTime
          <a href="mailto:natnaelsm@gmail.com" className="email-link" style={{ marginBottom: '20px', display: 'inline-block' }}>
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />&nbsp;&nbsp;
          Email
        </a>
        </a>
      </p>
</form>
      </dev>
    </section>
  );
}

export default Contact;
