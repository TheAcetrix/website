import React from "react";
import { CallToAction } from "../buttons";
import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import styles from "../../styles/home/contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <h1>Contact Us</h1>

        {/* form */}
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>

          <div className={styles.inputContainer}>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>

          <div className={styles.inputContainer}>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>

          <div className={styles.submitBTN}>
            <CallToAction type="submit">Send Message</CallToAction>
          </div>
        </form>
      </div>

      {/* socials */}
      <div className={styles.socials}>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaDiscord />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
