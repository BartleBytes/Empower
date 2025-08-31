import styles from "../styles/Services.module.css";

function Services() {
  const items = [
    { title: "Speech & Language Development", desc: "Helping children expand vocabulary and communication skills." },
    { title: "Articulation & Phonology",       desc: "Improving clarity of speech for confidence and connection." },
    { title: "Fluency & Stuttering",           desc: "Support for smoother, more fluent speech patterns." },
    { title: "Social Communication Skills",    desc: "Guidance to build peer interaction and conversational skills." },
    { title: "Parent Coaching & Training",     desc: "Strategies and tools to support your child at home." },
  ];

  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.cardGrid}>
        {items.map(service => (
          <div key={service.title} className={`${styles.card} ${styles.float}`}>
            <div className={styles.cardInner}>
              <div className={styles.cardTitle}>{service.title}</div>
              <p className={styles.cardText}>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
