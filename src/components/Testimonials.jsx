import styles from "../styles/Testimonials.module.css";
import { Quote } from "lucide-react";

function Testimonials() {
  const items = [
    {
      quote:
        "Alyssa is amazing. She is punctual, intentional with her instruction and makes it fun for the kiddos by using games and other sweet tools to help her students produce the sounds being worked on. My son has made leaps in his speech and adores Alyssa.",
      author: "Sarah Marano",
    },
    {
      quote:
        "My daughter truly considered her a friend she enjoyed their time so much. I recommend Empowerm Speech to any one who struggles with speech she is phenomenal",
      author: "Rochelle Whitney",
    },
    {
      quote:
        "Alyssa is fantastic and my son enjoyed his appointments every week with her. We will continue using Empower for future services.",
      author: "Danielle",
    },
  ];

  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>Client Feedback</p>
          <h2>What Families Are Saying</h2>
          <p className={styles.lead}>
            Stories from parents, educators, and students who have partnered with
            Empower Speech Pathology.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((t) => (
            <article key={t.author} className={styles.card}>
              <Quote aria-hidden="true" size={28} className={styles.icon} />
              <blockquote className={styles.quote}>“{t.quote}”</blockquote>
              <p className={styles.author}>— {t.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
