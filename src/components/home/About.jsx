import React, { useEffect, useRef, useState } from "react";
import { CallToAction } from "../buttons";
import Image from "next/image";
import styles from "../../styles/home/about.module.scss";
import { SectionWrapper } from "@/hoc";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* image box */}
      <motion.div variants={zoomIn(0.1, 1.25)} className={styles.imageBox}>
        <Image
          src={"/images/about-us-image.png"}
          alt="acetrix"
          width={500}
          height={500}
          className={styles.aboutImage}
        />
      </motion.div>

      <motion.div variants={textVariant(0.2, 1.5)} className={styles.content}>
        <h2>About Us</h2>

        <p>
          Welcome to Acetrix, Founded by passionate gamers, we unite the campus with epic 
          events collaborate with IGDC, host game jams. Whether you're a pro or just love gaming, 
          Acetrix has something for you!
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
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.1, 0.75)}
        className={styles.filledCircle}
      ></motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.1 * 2, 0.75)}
        className={styles.outlineCircle}
      ></motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.1 * 3, 0.75)}
        className={styles.filledRectangle}
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
