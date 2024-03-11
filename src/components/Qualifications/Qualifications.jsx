import React from "react";
import styles from "./qualifications.module.css";

const Qualifications = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.section_title}>Qualifications </h2>
      <span className={styles.contactPage}>My Personal Journey</span>
      <div className={styles.container}>
        <div>
          <h3 className={styles.qualification_title}>
            Bachelor of Computer Science and Engineering
          </h3>
          <span className={styles.school}>Lovely Professional University</span>
          <p className={styles.place}>Punjab, India</p>
          <div className={styles.qualification_calendar}>
            <i className={styles.calendar}>2020 - Present</i>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.container}>
        <div>
          <h3 className={styles.qualification_title}>Intermediate</h3>
          <span className={styles.school}>Narayana Jr College</span>
          <p className={styles.place}>Andhra Pradesh India</p>
          <div className={styles.qualification__calender}>
            <i className={styles.calendar}>2018 - 2020</i>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.container}>
        <div>
          <h3 className={styles.qualification_title}>10th </h3>
          <span className={styles.school}>Sri Chaitanya Techno School</span>
          <p className={styles.place}>Andhra Pradesh India</p>
          <div className={styles.qualification__calendar}>
            <i className={styles.calendar}>2016 - 2018</i>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Qualifications;
