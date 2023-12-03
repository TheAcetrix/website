import React from "react";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { CallToAction } from "../buttons";
import Image from "next/image";
import styles from "../../styles/home/landing.module.scss";

const landing = () => {
  return (
    <main className={styles.main}>
      <div className={styles.borderTopDown}></div>
      <div className={styles.borderLeftUpper}></div>
      <div className={styles.borderLeftDown}></div>
      <div className={styles.borderRightUpper}></div>
      <div className={styles.borderRightDown}></div>
      <div className={styles.content}>
        <Image
          src={"/images/logo-main.png"}
          alt="acetrix logo"
          width={300}
          height={100}
          className={styles.logo}
        />

        {/* text */}
        <h2>
          We create environment for you to escape the boring college life.
        </h2>
      </div>

      {/* cta */}
      <div className={styles.cta}>
        <CallToAction
          href="https://discord.gg/acetrix"
          icon={<FaDiscord className="w-6 h-6" />}
        >
          Join Discord
        </CallToAction>
        <CallToAction
          href="https://discord.gg/acetrix"
          icon={<FaYoutube className="w-6 h-6" />}
        >
          Subscribe
        </CallToAction>
      </div>
    </main>
  );
};

export default landing;
