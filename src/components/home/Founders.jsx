import React, { useEffect } from "react";
import styles from "../../styles/home/founders.module.scss";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Team from "./Team";

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";

import { founders } from "@/configs/founder.config";

const FounderCard = ({ founder, index }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className={styles.founderCard}
    >
      <FaQuoteLeft className={styles.quoteIcon + " w-6 h-6"} />

      <p>{founder.quote}</p>

      <Image
        src={founder.image}
        alt="founder"
        width={200}
        height={200}
        className="rounded-full w-40 h-40 ring-2 ring-[#c788ff]"
      />

      <h3 className="m-0 mt-2 text-xl font-semibold">{founder.name}</h3>

      <h4 className="m-0 -mt-1 text-base text-[#c788ff]">{founder.position}</h4>
    </motion.div>
  );
};

const Founders = () => {
  // console.log(founders);

  return (
    <>
      <div className={styles.founders}>
        <motion.h1 variants={textVariant()}>Meet the founders</motion.h1>

        <div className={styles.foundersContainer}>
          {[...founders].map((founder, idx) => (
            <FounderCard key={idx} founder={founder} index={founder.index} />
          ))}
        </div>
      </div>
      <Team />
    </>
  );
};

export default SectionWrapper(Founders, "founder");
