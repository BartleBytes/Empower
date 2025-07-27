// src/pages/Contact.jsx
import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <h2>Contact Us</h2>
      <p>We’d love to hear from you. Please fill out the form below and we’ll get back to you shortly.</p>
      <form className={styles.contactForm}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
