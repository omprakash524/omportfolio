// contactus.jsx

import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "./contactus.module.css";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm("service_o66gz6s", "template_0x9eugo", form.current, {
        publicKey: '-ya07ux_U-OlhOI6A',
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !'); 
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert('Email Failed to Send!');
        }
      );
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.contactPage}>Contact Me</h1>
      <span className={styles.contactDesc}>Please fill out the form below to discuss any work opportunities...</span><br />
      <form className={styles.contactForm} ref={form} onSubmit={sendEmail} action="">
        {/* <label htmlFor="name">Name: </label> */}
        <input type="text" className={styles.name} id="name" placeholder="Your name" name="your_name" /><br />
        {/* <label htmlFor="email">Email: </label> */}
        <input type="email" className={styles.email} id="email" placeholder="example@gmail.com" name="your_email"/><br />
        {/* <label htmlFor="message">Message: </label> */}
        <textarea name="message" className={styles.msg} id="message" rows="5" placeholder="Type your message here..."></textarea><br />
        <button type="submit" className={styles.submitBtn} value='send'>Submit</button>
      </form>
    </div>
  );
};

export default Contactus;
