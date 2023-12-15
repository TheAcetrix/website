import "@/styles/globals.scss";
import { Poppins } from "next/font/google";
import LoadingAnimation from "../components/Loading";
import { useEffect, useState } from "react";
import { ContextProvider } from "@/context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // Set loading to false after 4.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <ContextProvider>
      <div className={poppins.className + " acetrix-main"}>
        {loading ? <LoadingAnimation /> : <Component {...pageProps} />}
      </div>
    </ContextProvider>
  );
}

export default MyApp;
