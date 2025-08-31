import styles from "../styles/WhyPrivateSpeech.module.css";
import heroImg from "../assets/why-private-speech.jpg"; // swap for your image

export default function WhyPrivateSpeech() {
  return (
    <section id="why-private-speech" className={styles.section}>
      <div className={styles.container}>
        {/* Framed image (left) */}
        <figure className={styles.figure}>
          <img src={heroImg} alt="Child and SLP during a fun therapy activity" />
        </figure>

        {/* Text + accordion (right) */}
        <div className={styles.content}>
          <h2>Why Choose Private Speech Therapy?</h2>
          <p className={styles.intro}>
            Faster progress. Personalized care. Flexible scheduling. Private
            speech therapy gives your child focused 1:1 support—without waitlists
            or rushed sessions.
          </p>

          <div className={styles.accordion}>
            <details open>
              <summary>1:1 Attention &amp; No Waitlists</summary>
              <p>
                Your child works directly with a licensed speech-language
                pathologist—no crowded groups or long waits. Just targeted, child-centered therapy.
              </p>
            </details>

            <details>
              <summary>Personalized Care</summary>
              <p>
                Goals are built around your child’s strengths and daily routines,
                with strategies you can use at home, school, and in the community.
              </p>
            </details>

            <details>
              <summary>Faster Progress</summary>
              <p>
                Consistent, focused sessions and family collaboration help accelerate
                growth in speech, language, and communication confidence.
              </p>
            </details>

            <details>
              <summary>Flexible Scheduling</summary>
              <p>
                Choose times that fit your family—without the red tape.
              </p>
            </details>

            <details>
              <summary>In-Home &amp; Teletherapy Available</summary>
              <p>
                We meet you where you are—virtually or in person—so therapy is comfortable and convenient.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
