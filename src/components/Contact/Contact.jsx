import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Connect with me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:omprakashpandit524@.com">omprakashpandit524@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/omprakash524/" target="_blank">linkedin.com/in/omprakash524</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/omprakash524" target="_blank">github.com/omprakash524</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/leetcode.png")} alt="Leetcode icon" />
          <a href="https://leetcode.com/omprakashpandit524/" target="_blank">leetcode.com/omprakash524</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/medium.png")} alt="Medium icon" />
          <a href="https://omprakash524.medium.com/" target="_blank">medium.com/omprakash524</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/twitter1.png")} alt="twitter icon" />
          <a href="https://twitter.com/Omprakash939" target="_blank">twitter.com/omprakash939</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/quora1.png")} alt="quora icon" />
          <a href="https://www.quora.com/profile/Omprakash-Pandit-1" target="_blank">quora.com/omprakash</a>
        </li>
      </ul>
     
    </footer>
  );
};

