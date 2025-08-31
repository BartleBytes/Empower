import styles from "../styles/WhyEmpower.module.css";
import { CheckCircle } from "lucide-react";

function WhyEmpower() {
  const benefits = [
    {
      title: "Personalized Therapy",
      desc: "Each plan is tailored to meet your child’s unique needs and strengths."
    },
    {
      title: "Family-Centered Care",
      desc: "We work closely with parents and caregivers to support communication growth at home."
    },
    {
      title: "Experienced Clinicians",
      desc: "Our licensed therapists are highly trained and passionate about what they do."
    }
  ];

  return (
    <section className={styles.why}>
      <h2>Why Choose Empower?</h2>

      <div className={styles.grid}>
        {benefits.map((item) => (
          <article key={item.title} className={styles.card}>
            <CheckCircle aria-hidden="true" size={40} className={styles.icon} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyEmpower;
