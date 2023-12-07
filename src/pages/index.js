import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "../styles/home/home.module.scss";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import Founders from "@/components/home/Founders";
import Team from "@/components/home/Team";
import Footer from "@/components/Footer";
import Contact from "@/components/home/Contact";
import Events from "@/components/home/Events";
import LoadingAnimation from "@/components/Loading";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.homePage}>
      <Navbar />
      <Landing />
      <About />
      <Founders />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
