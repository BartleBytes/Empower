import styles from "../styles/Testimonials.module.css";

function Testimonials() {
  const reviews = [
    {
      quote: "Empower has made a huge difference in our child’s confidence. We’re so grateful for the support and personalized care.",
      name: "— Sarah R., Parent"
    },
    {
      quote: "As a teacher, I’ve seen firsthand how Empower Speech Pathology changes lives. Their therapists are warm, professional, and effective.",
      name: "— Jason M., Elementary Educator"
    },
    {
      quote: "I can't say enough good things about this team. They helped my son find his voice — literally and figuratively.",
      name: "— Emily L., Parent"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Families Are Saying</h2>
      <div className={styles.grid}>
        {reviews.map((r, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.quote}>"{r.quote}"</p>
            <p className={styles.name}>{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
