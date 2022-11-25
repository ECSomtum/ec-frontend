import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Router from "next/router";
import { CircularProgress } from "@mui/material";
import styles from "../styles/Home.module.css";


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <NavBar />
      {loading ? <div className={styles.main}><CircularProgress /></div> : <Component {...pageProps} />}{" "}
    </>
  );
}

export default MyApp;
