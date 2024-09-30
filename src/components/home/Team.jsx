import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import styles from "../../styles/home/team.module.scss";

import Marquee from "react-fast-marquee";
import { leads } from "@/configs/leads.config";
import { core as coreData } from "@/configs/core.config";
import { alumni as alumniData } from "@/configs/alumni.config";

const UserCard = ({ styles, user, showUser, setShowUser, setUser }) => {
  return (
    <div
      className={styles.userCard + " group"}
      onMouseEnter={() => {
        setShowUser(true);
        setUser({ name: user.name, role: user.role });
      }}
      onMouseOver={() => {
        setShowUser(true);
        setUser({ name: user.name, role: user.role });
      }}
      onMouseLeave={() => {
        setShowUser(false);
        setUser({ name: "", role: "" });
      }}
    >
      <a href={user.link}>
        <Image
          src={user.image}
          alt="founder"
          width={200}
          height={200}
          className="rounded-full  w-20 h-20 md:w-40 md:h-40 ring-2 ring-[#c788ff] group-hover:ring-white transition-all duration-500 ease-in-out"
        />
      </a>
    </div>
  );
};

const CoreCard = ({ styles, user, showUser, setShowUser, setUser }) => {
  return (
    <div
      className={styles.coreCard + " group"}
      onMouseEnter={() => {
        setShowUser(true);
        setUser({ name: user.name, role: user.role });
      }}
      onMouseOver={() => {
        setShowUser(true);
        setUser({ name: user.name, role: user.role });
      }}
      onMouseLeave={() => {
        setShowUser(false);
        setUser({ name: "", role: "" });
      }}
    >
      <a href={user.link}>
        <Image
          src={user.image}
          alt="founder"
          width={200}
          height={200}
          className="rounded-full  w-20 h-20 md:w-40 md:h-40 ring-2 ring-[#c788ff] group-hover:ring-white transition-all duration-500 ease-in-out"
        />
      </a>
    </div>
  );
};

const AlumniCard = ({ styles, user, showUser, setShowUser, setUser }) => {
  return (
    <div
      className={styles.alumniCard + " group"}
      onMouseEnter={() => {
        setShowUser(true);
        setUser({ name: user.name, role: user.role });
      }}
      onMouseOver={() => {
        setShowUser(true);
        setUser({ name: user.name, role: user.role });
      }}
      onMouseLeave={() => {
        setShowUser(false);
        setUser({ name: "", role: "" });
      }}
    >
      <a href={user.link}>
        <Image
          src={user.image}
          alt="founder"
          width={200}
          height={200}
          className="rounded-full  w-20 h-20 md:w-40 md:h-40 ring-2 ring-[#c788ff] group-hover:ring-white transition-all duration-500 ease-in-out"
        />
      </a>
    </div>
  );
};

const Team = () => {
  const [user, setUser] = useState({ name: "", role: "" });
  const [showUser, setShowUser] = useState(false);

  const [coreUser, setCoreUser] = useState({ name: "", role: "" });
  const [showCoreUser, setShowCoreUser] = useState(false);

  const [alumniUser, setAlumniUser] = useState({ name: "", role: "" });
  const [showAlumniUser, setShowAlumniUser] = useState(false);

  return (
    <>
      <div className={styles.team}>
        <motion.h1 variants={textVariant(0.2)}>
          Current President And Representative
        </motion.h1>

        <motion.div
          variants={fadeIn("up", "spring", 0.6, 1.25)}
          className={styles.teamContainer}
        >
          <Marquee pauseOnHover={true}>
            {[...leads].map((lead, idx) => (
              <UserCard
                key={idx}
                user={lead}
                styles={styles}
                showUser={showUser}
                setShowUser={setShowUser}
                setUser={setUser}
              />
            ))}
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
      <div className={styles.team}>
        <motion.h1 variants={textVariant(0.2)}>Core Team</motion.h1>

        <motion.div
          variants={fadeIn("up", "spring", 0.6, 1.25)}
          className={styles.teamContainer}
        >
          <Marquee pauseOnHover={true}>
            {[...coreData].map((core, idx) => (
              <CoreCard
                key={idx}
                user={core}
                styles={styles}
                showUser={showCoreUser}
                setShowUser={setShowCoreUser}
                setUser={setCoreUser}
              />
            ))}
          </Marquee>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 1, 1.45)}
          className={styles.userInfo + " "}
        >
          <h2>{coreUser.name || "Awesome people behind acetrix"}</h2>
          <p>{coreUser.role || "<3"}</p>
        </motion.div>
      </div>
      <div className={styles.team}>
        <motion.h1 variants={textVariant(0.2)}>Previous Alumni</motion.h1>

        <motion.div
          variants={fadeIn("up", "spring", 0.6, 1.25)}
          className={styles.teamContainer}
        >
          <Marquee pauseOnHover={true}>
            {[...alumniData].map((alumni, idx) => (
              <AlumniCard
                key={idx}
                user={alumni}
                styles={styles}
                showUser={showAlumniUser}
                setShowUser={setShowAlumniUser}
                setUser={setAlumniUser}
              />
            ))}
          </Marquee>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 1, 1.45)}
          className={styles.userInfo + " "}
        >
          <h2>{alumniUser.name || "Awesome people behind acetrix"}</h2>
          <p>{alumniUser.role || "<3"}</p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Team, "team");
