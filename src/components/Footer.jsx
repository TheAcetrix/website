import React from "react";
import styles from "../styles/footer/footer.module.scss";
import Image from "next/image";
import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {/* logo */}
        <Image
          src="/images/logo-main.png"
          alt="acetrix logo"
          width={700}
          height={700}
          className={styles.logo}
        />

        <div className={styles.linksContainer}>
          <div className={styles.linkWrapper}>
            {/* about */}
            <a href="#">About</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </div>

          <div className={styles.linkWrapper}>
            <a href="#">Jod o Wot</a>
            <a href="#">Valfire</a>
            <a href="#">COD</a>
          </div>

          <div className={styles.socialLinkContainer}>
            <p>Our Socials</p>

            <div className={styles.socialWrapper}>
              <a href="#">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#">
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>

            <div className={styles.socialWrapper}>
              <a href="#">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>Copyright@Acetrix2022</p>
    </footer>
  );
};

export default Footer;
