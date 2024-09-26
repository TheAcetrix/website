import { useEffect, useRef, useState } from "react";
import Head from "next/head";
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
  return (
    <>
      <Head>
        <title>Acetrix - Official Gaming Community of SSTC</title>
        <meta
          name="description"
          content="Welcome to Acetrix, the official gaming community of SSTC. Join us for epic events, game jams, and more!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing />
      <About />
      <Founders />
      {/* <Team /> */}
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const events = await getEvents();

  // console.log("events", events);

  return {
    props: { eventsArr: events },
  };
}
