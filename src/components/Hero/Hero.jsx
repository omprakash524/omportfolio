import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
// import Resume from './Resume';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Om Prakash</h1>
        <p className={styles.description}>
          I'm a aspiring <span className={styles.text_clr}>MERN stack developer</span> full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!. I passionately share my insights and expertise through technical blogs and articles on <span className={styles.text_clr}><a href="https://medium.com/@omprakash524" target="_blank" className={styles.text_clr}>Medium</a> </span>.
        </p>
        <div className={styles.rbtn}>
        <a href="mailto:omprakashpandit524@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <br />
        {/* <Resume/> */}
        <a href="/Om Prakash Resume.pdf" download className={styles.contactBtn}>
        Download Resume
      </a>
        </div>
      </div>
      <img
    src={getImageUrl("hero/omprofile.png")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      
    </section>
  );
};
