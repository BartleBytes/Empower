import styles from "../styles/WhyEmpower.module.css";
<<<<<<< HEAD
import { CheckCircle } from "lucide-react"; // optional if using icons
=======
import { CheckCircle } from "lucide-react";
>>>>>>> a9b3a65 (changed styles)

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
<<<<<<< HEAD
      <div className={styles.grid}>
        {benefits.map((item, index) => (
          <div key={index} className={styles.card}>
            <CheckCircle size={40} className={styles.icon} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
=======

      <div className={styles.grid}>
        {benefits.map((item) => (
          <article key={item.title} className={styles.card}>
            <CheckCircle aria-hidden="true" size={40} className={styles.icon} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </article>
>>>>>>> a9b3a65 (changed styles)
        ))}
      </div>
    </section>
  );
}

export default WhyEmpower;
