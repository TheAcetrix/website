import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import styles from "../../styles/home/team.module.scss";

import Marquee from "react-fast-marquee";

const UserCard = ({ styles, showUser, setShowUser, setUser }) => {
  return (
    <div
      className={styles.userCard + " group"}
      onMouseEnter={() => {
        setShowUser(true);
        setUser({ name: "Kirua", role: "binod" });
      }}
      onMouseOver={() => {
        setShowUser(true);
        setUser({ name: "Kirua", role: "binod" });
      }}
      onMouseLeave={() => {
        setShowUser(false);
        setUser({ name: "", role: "" });
      }}
    >
      <Image
        src={"/images/founder-img.jpg"}
        alt="founder"
        width={200}
        height={200}
        className="rounded-full  w-20 h-20 md:w-40 md:h-40 ring-2 ring-[#c788ff] group-hover:ring-white transition-all duration-500 ease-in-out"
      />
    </div>
  );
};

const Team = () => {
  const [user, setUser] = useState({ name: "", role: "" });
  const [showUser, setShowUser] = useState(false);

  return (
    <div className={styles.team}>
      <motion.h1 variants={textVariant(0.2)}>Core Team</motion.h1>

      <motion.div
        variants={fadeIn("up", "spring", 0.6, 1.25)}
        className={styles.teamContainer}
      >
        <Marquee>
          <UserCard
            styles={styles}
            showUser={showUser}
            setShowUser={setShowUser}
            setUser={setUser}
          />
          <UserCard
            styles={styles}
            showUser={showUser}
            setShowUser={setShowUser}
            setUser={setUser}
          />
          <UserCard
            styles={styles}
            showUser={showUser}
            setShowUser={setShowUser}
            setUser={setUser}
          />
          <UserCard
            styles={styles}
            showUser={showUser}
            setShowUser={setShowUser}
            setUser={setUser}
          />
          <UserCard
            styles={styles}
            showUser={showUser}
            setShowUser={setShowUser}
            setUser={setUser}
          />
        </Marquee>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 1, 1.45)}
        className={styles.userInfo + " "}
      >
        <h2>{user.name || "Awesome people behind acetrix"}</h2>
        <p>{user.role || "<3"}</p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Team, "team");
