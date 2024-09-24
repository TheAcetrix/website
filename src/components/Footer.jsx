import React from "react";
import styles from "../styles/footer/footer.module.scss";
import Image from "next/image";
import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SectionWrapper } from "@/hoc";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";
import { events, pageLinks, socials } from "../configs/footer.config";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <motion.div variants={fadeIn("", "spring", "", 1)}>
          {/* logo */}
          <Image
            src="/images/logo-main.png"
            alt="acetrix logo"
            width={700}
            height={700}
            className={styles.logo}
          />
        </motion.div>

        <div className={styles.linksContainer}>
          <div className={styles.linkWrapper}>
            {[...pageLinks].map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                href={link.path}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className={styles.linkWrapper}>
            {[...events].map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                href={link.path}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className={styles.socialLinkContainer}>
            <p>Our Socials</p>

            <div className={styles.socialWrapper}>
              {[...socials].splice(0, 2).map((social, index) => (
                <motion.a
                  key={index}
                  variants={fadeIn("up", "spring", 1 * 0.1, 0.75)}
                  href={social.path}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className={styles.socialWrapper}>
              {[...socials].splice(2, 4).map((social, index) => (
                <motion.a
                  key={index}
                  variants={fadeIn("up", "spring", 2 * 0.1, 0.75)}
                  href={social.path}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.p
        variants={fadeIn("up", "spring", 0.5, 1)}
        className={styles.copyright}
      >
        Copyright@ACETRIX2024
      </motion.p>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
