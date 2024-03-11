import React from "react";
import styles from "./footer.module.css";
import './footer.module.css';

const Footer = () => {
  return (
    // footer
    <footer>
      <span>&copy; 2024 Omprakash Pandit.</span>
      <span className={styles.text_clr}>Created with ❤️ by &nbsp;<a href="#" target="_blank" className={styles.text_clr}>Om Prakash</a> </span>
    </footer>
  );
};
export default Footer;