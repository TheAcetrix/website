import React, { useState } from "react";
import { CallToAction } from "../buttons";
import styles from "../../styles/home/event.module.scss";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Events = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.eventSection}>
      <h1>Events</h1>
      <hr />

      <div className={styles.switch}>
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
      </div>

      <div className={styles.eventContainer}>
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
      </div>

      <div className={styles.eventContainer}>
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
      </div>
    </div>
  );
};

export default Events;
