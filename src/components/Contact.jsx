import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import '../index.css';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        Feel free to reach out to me by filling out this form:
      </p>

      {sent ? (
        <p className="success-message">✅ Your message has been sent successfully!</p>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="input-field"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email@Email.com"
            required
            className="input-field"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Send Email
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
