import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import axios from "axios";
import { WhoCaresAboutNamingThingsBro } from "../../utils/utils";
import { CircularProgress } from "@mui/material";

const Candidate = () => {
  const [party, setParty] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/parties")
      .then((response) => response.data)
      .then((data) => {
        setParty(data);
        setLoading(false);
      })
      .catch((_) => {
        const mockParty = WhoCaresAboutNamingThingsBro();
        setParty(mockParty);
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
          <title>Score for each candidate</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Score for each candidate</h1>

          {party.map((p) => (
            <div className={styles.grid} key={p.id}>
              <div className={styles.card}>
                <Image
                  src={p.pictureUrl}
                  alt={"party" + p.id}
                  width={100}
                  height={100}
                />
                <p>อันดับ {p.id}</p>
                <h2>{p.name}</h2>
                <p>คะแนนรวม {Math.floor(100 / p.id)} เสียง</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    );
};

export default Candidate;
