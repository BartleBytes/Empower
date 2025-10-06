import { useState } from "react";
import styles from "../styles/Faqs.module.css";

const FAQS = [
  {
    question: "What types of clients do you work with?",
    answer:
      "We provide individualized speech and language therapy for children, teens, and adults. Our specialties include speech sound disorders, language delays, social communication, fluency (stuttering), and support for clients with developmental or medical diagnoses such as stroke recovery and aphasia.",
  },
  {
    question: "Do I need a referral to start speech therapy?",
    answer:
      "No referral is required. Families can reach out directly to schedule an evaluation or therapy sessions. If your pediatrician, teacher, or another professional has recommended speech therapy, you can contact us directly to get started.",
  },
  {
    question: "What can I expect during the first session?",
    answer:
      "The first session is typically an evaluation. We’ll review your concerns, collect background information, and complete play-based or structured assessments depending on age. From there, we’ll discuss recommendations and create an individualized therapy plan together.",
  },
  {
    question: "How long are sessions?",
    answer:
      "Most sessions are typically 30 or 50 minutes, depending on the client’s needs, attention, and therapy goals. Session frequency is determined collaboratively to best support progress.",
  },
  {
    question: "Do you offer in-person or virtual therapy?",
    answer:
      "We offer both! In-person sessions are available locally, and teletherapy is available for families who prefer the flexibility of online sessions.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className={`section ${styles.faqs}`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>FAQs</p>
          <h2 className={styles.title}>Questions About Empower Speech Pathology</h2>
          <p className={styles.lead}>
            Answers to the most common questions families ask when they connect
            with our team.
          </p>
        </div>

        <div className={styles.list}>
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    <span className={styles.iconBar} />
                    <span className={styles.iconBar} />
                  </span>
                </button>
                <div className={styles.panel}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
