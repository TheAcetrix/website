import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

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

const Team = ({ styles }) => {
  const [user, setUser] = useState({ name: "", role: "" });
  const [showUser, setShowUser] = useState(false);

  return (
    <div className={styles.team}>
      <h1>Core Team</h1>

      <div className={styles.teamContainer}>
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
      </div>

      <div className={styles.userInfo + " "}>
        <h2>{user.name || "Awesome people behind acetrix"}</h2>
        <p>{user.role || "<3"}</p>
      </div>
    </div>
  );
};

export default Team;
