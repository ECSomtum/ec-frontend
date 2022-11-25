import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../../styles/Party.module.css";
import Link from "next/link";
import Image from "next/image";

import {
  getCandidates,
  getCandidateScoreAreas,
  getParty,
} from "../../../services/ec";

const Location = ({ initialScores, initialCandidates, initialParty }) => {
  const [scores, setScores] = useState(initialScores);

  useEffect(() => {
    const candidateWithPartyInfo = initialCandidates.map((candidate) => {
        const candidateParty = initialParty.filter(
          (p) => candidate.party_id === p.id
        );
    
        return candidateParty.length > 0
          ? {
              ...candidate,
              partyName: candidateParty[0].name,
            }
          : { ...candidate, partyName: "", partyPictureUrl: "" };
      });

    const scoreWithCandidate = scores.map((score) => {
      const candidates = candidateWithPartyInfo.filter(
        (p) => p.id === score.most_voted
      );

      return candidates.length > 0
        ? {
            ...score,
            name: candidates[0].name,
            party: candidates[0].partyName,
            pictureUrl: candidates[0].pictureUrl
          }
        : score;
    });

    setScores(scoreWithCandidate);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Most voted candidate in each area</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Most voted candidate in each area</h1>
        <p className={styles.description}>
          Select each area to see each candidate score in the area
        </p>

        <div className={styles.grid}>
          {scores.map((p) => (
            <Link href={`/charts/location/candidate/${p.area_id}`} key={p.area_id}>
              <div className={styles.card}>
                <p>Area {p.area_id}</p>
                <h2>{p.area_name}</h2>
                {p.name ? (
                  <p>
                    <strong>{p.name}</strong>
                  </p>
                ) : (
                  <p>No vote yet</p>
                )}
                {p.party ? (
                  <p>
                    <strong>Party: </strong>{p.party}
                  </p>
                ) : (
                  ""
                )}
                {p.pictureUrl ? (
                  <Image
                    src={p.pictureUrl}
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
  const areaScores = await getCandidateScoreAreas();
  const candidates = await getCandidates();
  const party = await getParty();
  return {
    props: {
      initialScores: areaScores,
      initialCandidates: candidates,
      initialParty: party,
    },
  };
}

export default Location;
