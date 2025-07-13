import styles from "../styles/Hero.module.css";
import placeholder from "../assets/placeholder.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Empower Speech Pathology</h1>
          <p>
            Helping individuals find their voice through compassionate and evidence-based speech therapy.
          </p>
          <a href="/contact" className={styles.cta}>Get in Touch</a>
        </div>
        <img src={placeholder} alt="Empowerment" className={styles.image} />
      </div>
    </section>
  );
}

export default Hero;
