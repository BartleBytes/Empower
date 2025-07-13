import styles from "../styles/Services.module.css";

function Services() {
  const items = [
    "Speech & Language Development",
    "Articulation & Phonology",
    "Fluency & Stuttering",
    "Social Communication Skills",
    "Parent Coaching & Training"
  ];

  // 🎨 Pastel background colors
  const bgClasses = ["#e1f5fe", "#f3e5f5", "#fce4ec", "#e8f5e9", "#ede7f6"];

  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.cardGrid}>
        {items.map((service, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: bgClasses[index % bgClasses.length] }}
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
