import React, { useCallback, useEffect, useRef, useState } from "react";
import { CallToAction } from "../buttons";
import styles from "../../styles/home/event.module.scss";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { SectionWrapper } from "@/hoc";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";
import { useMyContext } from "@/context";

const Events = () => {
  const { eventsData } = useMyContext();
  const [arr, setArr] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setArr(eventsData);
  }, [eventsData]);

  // const EventsContainer = useCallback(
  //   ({ event, idx }) => {
  //     return (
  //       <div
  //         key={idx}
  //         variants={fadeIn("right", "spring", 1 * 0.8, 1.25)}
  //         className={styles.eventContainer}
  //       >
  //         <h2>{event.title}</h2>
  //         <div className={styles.wrapper}>
  //           <Marquee autoFill>
  //             {event.images.map((img, jdx) => (
  //               <Image
  //                 key={jdx}
  //                 src={"/images/founder-img.jpg"}
  //                 alt={event.title}
  //                 width={200}
  //                 height={200}
  //                 className={styles.img}
  //               />
  //             ))}
  //           </Marquee>
  //         </div>
  //       </div>
  //     );
  //   },
  //   [arr]
  // );

  return (
    <div className={styles.eventSection}>
      <motion.h1 variants={textVariant()}>Events</motion.h1>
      <hr />

      {/* {[...arr].map((event, idx) => (
        <EventsContainer key={idx} event={event} idx={idx} />
      ))} */}

      <motion.div
        variants={fadeIn("right", "spring", 1 * 0.8, 1.25)}
        className={styles.eventContainer}
      >
        <h2>Acetrix War League</h2>
        <div className={styles.wrapper}>
          <Marquee>
            <Image
              src={"/images/team/founder/alu.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/cre.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/alu.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/cre.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/alu.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/cre.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/alu.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/cre.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
          </Marquee>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "spring", 1 * 0.8, 1.25)}
        className={styles.eventContainer}
      >
        <h2>Duke o death</h2>
        <div className={styles.wrapper}>
          <Marquee direction="right">
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
            <Image
              src={"/images/team/founder/alu.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/cre.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/alu.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
            <Image
              src={"/images/team/founder/cre.jpg"}
              alt="founder"
              width={200}
              height={200}
              className={styles.img}
            />
          </Marquee>
        </div>
      </motion.div>
      {/* Previous Button */}
      {/* <div className={styles.galleryBtn}>
        <CallToAction>
          {isVisible ? 'Show Less' : 'Show More'}
        </CallToAction>
      </div> */}
      {/* New Button */}
      <div
        className={styles.galleryBtn}
        onClick={() => setIsVisible(!isVisible)}
      >
        <CallToAction>{isVisible ? "Show Less" : "Show More"}</CallToAction>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            // initial={{ height: 0, opacity: 0 }}
            // animate={{ height: "auto", opacity: 1 }}
            // exit={{ height: 0, opacity: 0 }}
            // transition={{ duration: 0.5 }}
            className={styles.eventContainer}
          >
            <h2>Chess Tournament</h2>
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
                <Image
                  src={"/images/team/founder/alu.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/cre.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/alu.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/cre.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/alu.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/cre.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/alu.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/cre.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
              </Marquee>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            // initial={{ height: 0, opacity: 0 }}
            // animate={{ height: 'auto', opacity: 1 }}
            // exit={{ height: 0, opacity: 0 }}
            // transition={{ duration: 0.5 }}
            className={styles.eventContainer}
          >
            <h2>Valfire</h2>
            <div className={styles.wrapper}>
              <Marquee direction="right">
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
                <Image
                  src={"/images/team/founder/alu.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/cre.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/alu.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <Image
                  src={"/images/team/founder/cre.jpg"}
                  alt="founder"
                  width={200}
                  height={200}
                  className={styles.img}
                />
              </Marquee>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Events, "events");
