import React, { useState } from "react";
import { CallToAction } from "../buttons";
import styles from "../../styles/home/event.module.scss";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { SectionWrapper } from "@/hoc";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";

const Events = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.eventSection}>
      <motion.h1 variants={textVariant()}>Events</motion.h1>
      <hr />

      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        className={styles.switch}
      >
        <div className={styles.wrapper}>
          <span onClick={() => setToggle(true)}>Online</span>
          <span onClick={() => setToggle(false)}>Offline</span>
          <span
            className={
              styles.overlay +
              " " +
              `${toggle ? "translate-x-0" : "translate-x-full"}`
            }
          ></span>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "tween", 1 * 0.4, 1)}
        className={styles.eventContainer}
      >
        <h2>Acetrix War League</h2>

        <div className={styles.wrapper}>
          <Marquee>
            <Image
              src={"/images/founder-img.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/founder-img.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/founder-img.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/founder-img.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
          </Marquee>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "tween", 2 * 0.4, 1)}
        className={styles.eventContainer}
      >
        <h2>Valfire</h2>

        <div className={styles.wrapper}>
          <Marquee>
            <Image
              src={"/images/founder-img.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/founder-img.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/founder-img.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/founder-img.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
          </Marquee>
        </div>
        {/*  */}
        <div className={styles.galleryBtn}>
          <CallToAction href={"#"}>Gallery</CallToAction>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Events, "events");
