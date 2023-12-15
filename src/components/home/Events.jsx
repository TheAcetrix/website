import React, { useCallback, useEffect, useRef, useState } from "react";
import { CallToAction } from "../buttons";
import styles from "../../styles/home/event.module.scss";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { SectionWrapper } from "@/hoc";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";
import { useMyContext } from "@/context";

const Events = () => {
  const [mode, setMode] = useState("");
  const { eventsData } = useMyContext();

  const [arr, setArr] = useState([]);

  useEffect(() => {
    setMode("online");
  }, []);

  useEffect(() => {
    if (mode === "online") {
      setArr(eventsData.filter((event) => event.type === "online"));
    } else {
      setArr(eventsData.filter((event) => event.type === "offline"));
    }
  }, [mode]);

  // console.log({ arr });

  const EventsContainer = useCallback(
    ({ event, idx }) => {
      return (
        <div
          key={mode + idx}
          variants={fadeIn("right", "spring", 1 * 0.8, 1.25)}
          className={styles.eventContainer}
        >
          <h2>{event.title}</h2>
          {/* {console.log(event)} */}

          <div className={styles.wrapper}>
            <Marquee autoFill>
              {event.images.map((img, jdx) => (
                <Image
                  key={jdx}
                  src={img || "/images/founder-img.jpg"}
                  alt={event.title}
                  width={200}
                  height={200}
                  className={styles.img}
                />
              ))}
            </Marquee>
          </div>
        </div>
      );
    },
    [arr, mode]
  );

  return (
    <div className={styles.eventSection}>
      <motion.h1 variants={textVariant()}>Events</motion.h1>
      <hr />

      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1.25)}
        className={styles.switch}
      >
        <div className={styles.wrapper}>
          <span onClick={() => setMode("online")}>Online</span>
          <span onClick={() => setMode("offline")}>Offline</span>
          <span
            className={
              styles.overlay +
              " " +
              `${mode === "online" ? "translate-x-0" : "translate-x-full"}`
            }
          ></span>
        </div>
      </motion.div>

      {[...arr].map((event, idx) => (
        <EventsContainer key={idx} event={event} idx={idx} />
      ))}

      <motion.div
        variants={fadeIn("right", "spring", 1 * 0.8, 1.25)}
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
        variants={fadeIn("right", "spring", 2 * 0.8, 1.25)}
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
