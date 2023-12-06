import React from "react";
import styles from "../../styles/home/founders.module.scss";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Team from "./Team";

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";

const FounderCard = ({ quote, name, position, image, index }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className={styles.founderCard}
    >
      {/* quote icon */}
      <FaQuoteLeft className={styles.quoteIcon + " w-6 h-6"} />

      {/* text */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        eaque, possimus modi libero aspernatur vero ex ullam doloribus nisi
        animi recusandae est tempora suscipit asperiores assumenda! Doloribus
        nostrum perferendis delectus explicabo? Nisi optio doloribus in
        recusandae unde omnis nulla quo?
      </p>

      {/* image */}
      <Image
        src={"/images/founder-img.jpg"}
        alt="founder"
        width={200}
        height={200}
        className="rounded-full w-40 h-40 ring-2 ring-[#c788ff]"
      />

      {/* name */}
      <h3 className="m-0 mt-2 text-xl font-semibold">
        Founder Name {name && name}
      </h3>

      {/* position */}
      <h4 className="m-0 -mt-1 text-base text-[#c788ff]">Founder</h4>
    </motion.div>
  );
};

const Founders = () => {
  return (
    <>
      <div className={styles.founders}>
        <motion.h1 variants={textVariant()}>Meet the founders</motion.h1>

        <div className={styles.foundersContainer}>
          <FounderCard index={2} />
          <FounderCard name={"dio"} index={1} />
          <FounderCard index={3} />
        </div>
      </div>
      <Team />
    </>
  );
};

export default SectionWrapper(Founders, "founder");
