import styles from "../styles/AboutPage.module.css";
import alyssaImg from "../assets/Alyssa_2.jpg";
import selmaImg from "../assets/selma.jpg"; // <-- add your image file

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.wrapper}>
        {/* 1) Page title at top */}
        <h2 className={styles.pageTitle}>Meet the Team</h2>

        {/* 2) Team member: Selma (image LEFT, text RIGHT) */}
        <article className={styles.memberCard}>
          <div className={styles.memberRow}>
            <figure className={styles.imageCol}>
              <img src={selmaImg} alt="Selma, Speech-Language Pathologist" />
            </figure>
            <div className={styles.textCol}>
              <h3 className={styles.memberName}>Selma - Speech Language Pathologist</h3>
              <p>
                Selma is a warm, dedicated SLP who serves clients across clinic, school, and private practice settings.
                She has supported individuals from 18 months to 76 years old, and values the way each person teaches her something new. 
                Her clinical interests include communication, swallowing, and fostering meaningful connections with others.
               Selma brings evidence-based care, genuine empathy, and a calm, encouraging presence to every session—and she’s grateful to do what she loves each day.
              </p>
            </div>
          </div>
        </article>

        {/* 2) Team member: Alyssa (image RIGHT, text LEFT) */}
        <article className={`${styles.memberCard} ${styles.reverse}`}>
          <div className={styles.memberRow}>
            <figure className={styles.imageCol}>
              <img src={alyssaImg} alt="Alyssa, Speech-Language Pathologist" />
            </figure>
            <div className={styles.textCol}>
              <h3 className={styles.memberName}>Alyssa - Speech Language Pathologist</h3>
              <p>
               Alyssa is a licensed Speech-Language Pathologist with 10+ years of experience helping individuals find their voice. 
               Her practice is grounded in compassion, evidence-based techniques, and a deep belief in every person’s potential.
                With a special passion for working with children, Alyssa partners closely with families to build communication skills in a warm, nurturing environment. 
                Whether a child needs support with speech sounds, language development, or social communication, she provides personalized care that empowers growth and confidence—one meaningful step at a time.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
