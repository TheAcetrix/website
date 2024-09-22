import React, { useState } from "react";
import styles from "../styles/navbar/navbar.module.scss";
import Image from "next/image";
import { GrAppsRounded } from "react-icons/gr";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

const NavLink = ({ href, children, icon }) => {
  return (
    <div className={styles.navlink}>
      <Link href={href}>{children}</Link>
      <span>{icon}</span>
    </div>
  );
};

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className={styles.navbar}>
      {/* logo */}

      <div className={styles.logo}>
        <Image
          src="/images/logo-main.png"
          alt="acetrix logo"
          width="200"
          height="100"
        />
      </div>

      <div className={styles.drawer}>
        {/* drawer */}
        <GrAppsRounded
          className={styles.drawerIcon}
          onClick={() => setShowDrawer(!showDrawer)}
        />

        {/* navlinks */}
        <div
          className={`${styles.navlinkContainer}  ${
            !showDrawer ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* <NavLink href="#" icon={<IoHome />}> */}
          <NavLink href="#">
          <span>Home&nbsp;</span>
          </NavLink>
          <NavLink href="#about">
          <span>About&nbsp;</span>
          </NavLink>
          <NavLink href="#contact">
          <span>Contact&nbsp;Us</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
