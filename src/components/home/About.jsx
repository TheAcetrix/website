import React from "react";
import { CallToAction } from "../buttons";
import Image from "next/image";
import styles from "../../styles/home/about.module.scss";

const About = () => {
  return (
    <section className={styles.aboutPage}>
      {/* image box */}
      <div className={styles.imageBox}>
        <Image
          src={"/images/about-us-image.png"}
          alt="acetrix"
          width={500}
          height={500}
          className={styles.aboutImage}
        />
      </div>

      <div className={styles.content}>
        <h2>About Us</h2>

        <p>
          We are Esports gaming community. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Commodi eiusquo ut omnis fuga qui dicta
        </p>

        <div className={styles.cta}>
          <CallToAction href="https://discord.gg/acetrix">
            Learn More
          </CallToAction>

          <Image
            src={"/images/logo.png"}
            alt="acetrix logo"
            width={200}
            height={200}
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.filledCircle}></div>
      <div className={styles.outlineCircle}></div>
      <div className={styles.filledRectangle}></div>
    </section>
  );
};

export default About;
