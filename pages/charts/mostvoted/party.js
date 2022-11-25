import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../../styles/Party.module.css";
import Link from "next/link";
import Image from "next/image";

import { getParty, getPartyScoreAreas } from "../../../services/ec";

const Location = ({ initialScores, initialParty }) => {
  const [scores, setScores] = useState(initialScores);

  useEffect(() => {
    const scoreWithParty = scores.map((score) => {
      const party = initialParty.filter((p) => p.id === score.most_voted);

      return party.length > 0
        ? {
            ...score,
            partyName: party[0].name,
            partyPictureUrl: party[0].pictureUrl,
          }
        : score;
    });

    setScores(scoreWithParty);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Most voted party in each area</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Most voted party in each area</h1>
        <p className={styles.description}>
          Select each area to see each party score in the area
        </p>

        <div className={styles.grid}>
          {scores.map((p) => (
            <Link href={`/charts/location/party/${p.area_id}`} key={p.area_id}>
              <div className={styles.card}>
                <p>Area {p.area_id}</p>
                <h2>{p.area_name}</h2>
                {p.partyName ? (
                  <p>
                    <strong>Party: </strong>{p.partyName}
                  </p>
                ) : (
                  <p>No vote yet</p>
                )}
                {p.partyPictureUrl ? (
                  <Image
                    src={p.partyPictureUrl}
                    alt={"party" + p.id}
                    width={100}
                    height={100}
                  />
                ) : (
                  <></>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const areaScores = await getPartyScoreAreas();
  const party = await getParty();

  return {
    props: {
      initialScores: areaScores,
      initialParty: party,
    },
  };
}

export default Location;
