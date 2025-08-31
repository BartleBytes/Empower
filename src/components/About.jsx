import styles from "../styles/About.module.css";
import alyssa from "../assets/Alyssa.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imageContainer}>
          <img
            src={alyssa}
            alt="Alyssa - Speech Therapist"
            className={styles.image}
          />
        </div>

        {/* Text */}
        <div className={styles.text}>
        <article className={styles.infoCard}>
          <h3 className={styles.h3}>Why Choose Empower?</h3>
          <p>
            We believe that communication is a fundamental human right. At
            Empower Speech Pathology, our certified therapists provide a
            welcoming and individualized approach for every client—children,
            teens, and adults alike.
          </p>

          <h3 className={styles.h3}>Our Mission</h3>
          <p>
            To empower individuals of all ages to express themselves confidently
            and effectively, creating stronger connections with the world around
            them.
          </p>

          <section className={styles.payment}>
            <h3 className={styles.h3}>Payment Options</h3>
            <p>
              We accept <strong>cash, check, credit card, and HSA card</strong>.
              We are <strong>private pay only</strong> at this time, but we can
              provide an invoice for you to submit to your insurance if needed.
            </p>
            <p>
              As a vendor through <strong>AZ ESA</strong>, we can accept direct
              payment through <strong>ClassWallet</strong>.
            </p>
          </section>
        </article>

          <Link to="/contact" className={styles.button}>
            Book a Free Consult
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
