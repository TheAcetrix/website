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
import { getEvents, getFounders } from "@/lib/appwrite";
import { useMyContext } from "@/context";

export default function Home({ eventsArr }) {
  const { setEventsData } = useMyContext();

  useEffect(() => {
    setEventsData(eventsArr);
  }, []);

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

export async function getStaticProps() {
  const events = await getEvents();

  console.log("events", events);

  return {
    props: { eventsArr: events },
  };
}
