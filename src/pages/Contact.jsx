// src/pages/Contact.jsx
import styles from "../styles/Contact.module.css";

const SP_URL =
  "https://alyssa-empwrspeechpathologysolutionsgmailcom.clientsecure.me";
const EMAIL = "Empwr.speechpathologysolutions@gmail.com";

export default function Contact() {
  const scrollToForm = () => {
    const el = document.getElementById("questionForm");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactWrapper}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.intro}>
          We’d love to hear from you. Choose an option below or send us a
          message—we’ll get back to you shortly.
        </p>

        {/* Actions: Book vs. Send Question */}
        <div className={styles.actions}>
          <a
            className={styles.primaryAction}
            href={SP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an Appointment
          </a>

          <button
            type="button"
            className={styles.secondaryAction}
            onClick={scrollToForm}
          >
            Send a Question
          </button>
        </div>

        {/* Email form */}
        <form
          id="questionForm"
          className={styles.contactForm}
          action={`mailto:${EMAIL}`}
          method="POST"
          encType="text/plain"
        >
          <label htmlFor="name" className={styles.label}>
            <span className={styles.labelText}>Name</span>
            <input
              id="name"
              type="text"
              name="Name"
              placeholder="Your name"
              required
            />
          </label>

          <label htmlFor="email" className={styles.label}>
            <span className={styles.labelText}>Email</span>
            <input
              id="email"
              type="email"
              name="Email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label htmlFor="message" className={styles.label}>
            <span className={styles.labelText}>Message</span>
            <textarea
              id="message"
              name="Message"
              rows={5}
              placeholder="How can we help?"
              required
            />
          </label>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>

        <p className={styles.directEmail}>
          Prefer your email app?{" "}
          <a href={`mailto:${EMAIL}`} className={styles.mailLink}>
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
