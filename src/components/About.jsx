import styles from "../styles/About.module.css";
import alyssa from "../assets/Alyssa.jpg";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={alyssa} alt="Alyssa - Speech Therapist" className={styles.image} />
        </div>
        <div className={styles.text}>
          <h2>Meet Alyssa</h2>
          <p>
            Alyssa is a dedicated Speech-Language Pathologist with a passion for helping children find their voice. With years of clinical experience and a heart for kids, she works closely with families to build communication skills in a warm, nurturing environment.
          </p>
          <p>
            Whether your child needs support with speech sounds, language development, or social communication, Alyssa is committed to personalized care that empowers each child to grow with confidence.
          </p>
          <a className={styles.button} href="/contact">Book a Free Consult</a>
        </div>
      </div>
    </section>
  );
}

export default About;
