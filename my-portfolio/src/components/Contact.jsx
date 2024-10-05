import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // First, send the email to the recipient
    emailjs.sendForm('service_rboe8pc', 'template_wquatud', form.current, 'w6A4qJCf2BJ9HMbHz')
      .then((result) => {
        console.log(result.text);
        alert("Your message has been sent successfully!");

        // Now, send an auto-reply to the sender
        const toName = form.current.to_name.value;
        const fromName = form.current.from_name.value;
        const emailTo = form.current.email.value;
        const messageContent = form.current.message.value;

        const autoReplyTemplateParams = {
          to_name: fromName,
          from_name: 'CYROX Team', // Or use a specific name if applicable
          message: `
            Dear ${toName},

            Thank you for reaching out!

            This is an automated response to confirm that we have received your message.

            Your message: 
            ${messageContent}

            We appreciate your message and will reply as soon as possible. If your matter is urgent, please feel free to call us at [Your Phone Number] or email us directly at [Your Email Address].

            Best regards,
            CYROX Team
          `,
          email: emailTo,
        };

        // Send the auto-reply email using EmailJS
        emailjs.send('service_rboe8pc', 'template_hm68pro', autoReplyTemplateParams, 'w6A4qJCf2BJ9HMbHz')
          .then((replyResult) => {
            console.log(replyResult.text);
            form.current.reset(); // Reset the form fields after successful submission
          }, (replyError) => {
            console.log(replyError.text);
            alert("Failed to send the auto-reply message. Please try again.");
          });

      }, (error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again.");
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="image-container">
          <img src="/contact-us-5795988-4849052.png" alt="Contact Us" />
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <p>
            Als u geïnteresseerd bent in hoe ik kan bijdragen aan uw team, zou ik graag met u in contact komen.
          </p>
          <h2>Contact me</h2>
          
          <div className="form-group">
            <label htmlFor="to_name">To Name:</label>
            <input type="text" id="to_name" name="to_name" required />
          </div>

          <div className="form-group">
            <label htmlFor="from_name">Your Name:</label>
            <input type="text" id="from_name" name="from_name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
