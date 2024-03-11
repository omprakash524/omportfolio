import React from 'react';

import styles from "./Hero.module.css";

const Resume = () => {
  return (
    <div>
      <a href="/Om Prakash Resume.pdf" download className={styles.contactBtn}>
        Download Resume
      </a>
    </div>
  );
};

export default Resume;