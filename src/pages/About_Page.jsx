import styles from "../styles/AboutPage.module.css";
import profileImage from "../assets/Alyssa_2.jpg";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Why Choose Empower?</h2>
          <p>
            We believe that communication is a fundamental human right. At
            Empower Speech Pathology, our certified therapists provide a
            welcoming and individualized approach for every client — children,
            teens, and adults alike.
          </p>

          <h3>Meet Alyssa</h3>
          <p>
            Alyssa is a licensed speech-language pathologist with over 10 years
            of experience helping individuals find their voice. Her approach is
            rooted in compassion, evidence-based techniques, and a deep belief
            in each person’s potential.
          </p>

          <h3>Our Mission</h3>
          <p>
            To empower individuals of all ages to express themselves confidently
            and effectively, creating stronger connections with the world around
            them.
          </p>

          {/* Payment Options */}
          <section className={styles.payment}>
            <h2>Payment Options</h2>
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
        </div>

        <div className={styles.imageContainer}>
          <img src={profileImage} alt="Alyssa, Speech Pathologist" />
        </div>
      </div>
    </section>
  );
}

export default About;
