import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/Party.module.css";
import Image from "next/image";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Candidate = () => {
  const [party, setParty] = useState([]);
  const [score, setScore] = useState({});
  const [loading, setLoading] = useState(true);

  const getParty = async () =>
    await axios
      .get("https://somtum-backend.herokuapp.com/party")
      .then((response) => response.data)
      .then((data) => {
        setParty(data);
      })
      .catch((err) => {
        console.log(err);
      });

  const getScore = async () =>
    await axios
    .get("https://somtum-backend.herokuapp.com/score/party")
    .then((response) => response.data)
    .then((data) => {
      setScore(data);
      setParty(party.map((p) => ({ ...p, score: score[p.id] })));
    })
    .catch((err) => {
      console.log(err);
    })

  const sortedCandidate = party.sort((a, b) => {
    return a.score < b.score ? -1 : (a.score > b.score) ? 1 : 0;
  })

  useEffect(() => {
    setLoading(true);
    getParty()
    getScore()
    setLoading(false);
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
          <title>Score for each party</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Score for each party</h1>

          <div className={styles.grid}>
            {sortedCandidate.map((p) => (
              <div className={styles.card} key={p.id}>
                <Image
                  src={p.pictureUrl}
                  alt={"party" + p.id}
                  width={100}
                  height={100}
                />
                <h2>{p.name}</h2>
                <p>
                  คะแนนรวม <strong>{score[p.id]}</strong> เสียง
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
};

export default Candidate;
