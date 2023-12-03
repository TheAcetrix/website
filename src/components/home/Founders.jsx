import React from "react";
import styles from "../../styles/home/founders.module.scss";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Team from "./Team";

const FounderCard = ({ quote, name, position, image }) => {
  return (
    <div className={styles.founderCard}>
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
      <h3 className="m-0 mt-2 font-semibold">Founder Name {name && name}</h3>

      {/* position */}
      <h4 className="m-0 -mt-1 text-base text-[#c788ff]">Founder</h4>
    </div>
  );
};

const Founders = () => {
  return (
    <>
      <div className={styles.founders}>
        <h1>Meet the founders</h1>

        <div className={styles.foundersContainer}>
          <FounderCard />
          <FounderCard name={"dio"} />
          <FounderCard />
        </div>
      </div>
      <Team styles={styles} />
    </>
  );
};

export default Founders;
