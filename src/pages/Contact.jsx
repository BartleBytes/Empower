// src/pages/Contact.jsx
import { useState } from "react";
import styles from "../styles/Contact.module.css";

const SP_URL =
  "https://alyssa-empwrspeechpathologysolutionsgmailcom.clientsecure.me";
const EMAIL = "Empwr.speechpathologysolutions@gmail.com";
const FORMSPREE_URL = "https://formspree.io/f/xzzjdjpz";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const scrollToForm = () => {
    const el = document.getElementById("questionForm");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("We couldn't send your message. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section className={`section ${styles.contact}`}>
      <div className={`container ${styles.contactWrapper}`}>
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
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className={styles.label}>
            <span className={styles.labelText}>Name</span>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>

          <label htmlFor="email" className={styles.label}>
            <span className={styles.labelText}>Email</span>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label htmlFor="message" className={styles.label}>
            <span className={styles.labelText}>Message</span>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="How can we help?"
              required
            />
          </label>

          <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>

        {status === "sent" && (
          <p className={styles.successMessage}>
            Thanks for reaching out! An Empower representative will get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}

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
