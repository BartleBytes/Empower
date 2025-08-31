import styles from "../styles/Testimonials.module.css";
import { Quote } from "lucide-react";

function Testimonials() {
  const items = [
    {
      quote:
        "Empower has made a huge difference in our child’s confidence. We’re so grateful for the support and personalized care.",
      author: "Sarah R., Parent",
    },
    {
      quote:
        "As a teacher, I’ve seen firsthand how Empower Speech Pathology changes lives. Their therapists are warm, professional, and effective.",
      author: "Jason M., Elementary Educator",
    },
    {
      quote:
        "I can't say enough good things about this team. They helped my son find his voice — literally and figuratively.",
      author: "Emily L., Parent",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Families Are Saying</h2>

      <div className={styles.grid}>
        {items.map((t) => (
          <article key={t.author} className={styles.card}>
            <Quote aria-hidden="true" size={28} className={styles.icon} />
            <blockquote className={styles.quote}>“{t.quote}”</blockquote>
            <p className={styles.author}>— {t.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
