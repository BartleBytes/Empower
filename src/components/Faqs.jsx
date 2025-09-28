import { useState } from "react";
import styles from "../styles/Faqs.module.css";

const FAQS = [
  {
    question: "What ages do you serve at Empower Speech Pathology?",
    answer:
      "We work with toddlers through teens and young adults. Every plan is tailored to the client’s developmental stage, strengths, and communication goals.",
  },
  {
    question: "Do you offer in-home or teletherapy services?",
    answer:
      "Yes. Sessions can take place in your home, at our Scottsdale office, or virtually. We’ll recommend the format that best supports your family’s schedule and your child’s success.",
  },
  {
    question: "How do you personalize a therapy plan?",
    answer:
      "We start with a comprehensive assessment, then collaborate with caregivers and educators to choose targets, session frequency, and home practice routines that fit your child’s needs.",
  },
  {
    question: "Can you help us navigate insurance or ESA funding?",
    answer:
      "We operate as private pay, but we provide detailed superbills for insurance reimbursement and accept ClassWallet for Arizona ESA families.",
  },
  {
    question: "How soon can we get started?",
    answer:
      "Most families begin within one to two weeks. Reach out through the contact form and we’ll schedule a free consultation to map out next steps.",
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
