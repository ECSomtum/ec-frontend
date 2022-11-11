import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import axios from "axios";
import { WhoCaresAboutNamingThingsBro } from "../../utils/utils";
import { LocationNaja } from "../../utils/utils";
import { CircularProgress } from "@mui/material";

const Location = () => {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/locations")
      .then((response) => response.data)
      .then((data) => {
        setLocation(data);
        setLoading(false);
      })
      .catch((_) => {
        const mockLocation = LocationNaja();
        setLocation(mockLocation);
	setLoading(false)
      });
  }, []);

  if (loading)
    return (
      <div className={styles.main}>
        <CircularProgress />
      </div>
    );
  else
    return (
      <div className={styles.container}>
        <Head>
          <title>Most voted candidate in selected section</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Most voted candidate in selected section</h1>

          {location.map((p) => (
            <div className={styles.grid} key={p.locationId}>
              <div className={styles.card}>
                <p>ลำดับ {p.locationId}</p>
                <h2>{p.locationName}</h2>
              </div>
            </div>
          ))}
        </main>
      </div>
    );
};

export default Location;
