import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/Party.module.css";
import Image from "next/image";
import { getParty, getScoreParty } from "../../services/ec";

const Party = ({ initialParty, initialScore }) => {
  const [party, setParty] = useState(initialParty);
  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    const partyWithSortedScore = party
      .map((p) => ({ ...p, score: score[p.id] }))
      .sort((a, b) => {
        return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
      });
    setParty(partyWithSortedScore);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Score for each party</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Score for each party</h1>

        <div className={styles.grid}>
          {party.map((p, i) => (
            <div className={styles.card} key={i}>
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

export async function getServerSideProps() {
  const party = await getParty();
  const score = await getScoreParty();
  return {
    props: {
      initialParty: party,
      initialScore: score,
    },
  };
}

export default Party;
