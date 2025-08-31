import styles from "../styles/Services.module.css";

function Services() {
  const items = [
<<<<<<< HEAD
    "Speech & Language Development",
    "Articulation & Phonology",
    "Fluency & Stuttering",
    "Social Communication Skills",
    "Parent Coaching & Training"
  ];

  // 🎨 Pastel background colors
  const bgClasses = ["#e1f5fe", "#f3e5f5", "#fce4ec", "#e8f5e9", "#ede7f6"];

=======
    { title: "Speech & Language Development", desc: "Helping children expand vocabulary and communication skills." },
    { title: "Articulation & Phonology",       desc: "Improving clarity of speech for confidence and connection." },
    { title: "Fluency & Stuttering",           desc: "Support for smoother, more fluent speech patterns." },
    { title: "Social Communication Skills",    desc: "Guidance to build peer interaction and conversational skills." },
    { title: "Parent Coaching & Training",     desc: "Strategies and tools to support your child at home." },
  ];

>>>>>>> a9b3a65 (changed styles)
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.cardGrid}>
<<<<<<< HEAD
        {items.map((service, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: bgClasses[index % bgClasses.length] }}
          >
            {service}
=======
        {items.map(service => (
          <div key={service.title} className={`${styles.card} ${styles.float}`}>
            <div className={styles.cardInner}>
              <div className={styles.cardTitle}>{service.title}</div>
              <p className={styles.cardText}>{service.desc}</p>
            </div>
>>>>>>> a9b3a65 (changed styles)
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
