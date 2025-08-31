// src/pages/Contact.jsx
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactWrapper}>
        <h2>Contact Us</h2>
        <p>We’d love to hear from you. Please fill out the form below and we’ll get back to you shortly.</p>

        <form className={styles.contactForm}>
          <label htmlFor="name">
            Name
            <input id="name" type="text" name="name" placeholder="Your name" required />
          </label>

          <label htmlFor="email">
            Email
            <input id="email" type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label htmlFor="message">
            Message
            <textarea id="message" name="message" rows={5} placeholder="How can we help?" required />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
