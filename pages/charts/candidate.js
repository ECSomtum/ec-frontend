import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/Party.module.css";
import Image from "next/image";
import { getCandidates, getParty, getPopulationStatistics, getScoreMP } from "../../services/ec";

const Candidate = ({ initialCandidates, initialParty, initialScore, initialLocation }) => {
  const [candidates, setCandidates] = useState(initialCandidates)
  
  const setCandidateWithParty = (initialCandidates) => {
    const candidateWithPartyInfo = initialCandidates.map(candidate => {
      const candidateParty = initialParty.filter(
        p => candidate.party_id === p.id
      );

      const candidateLocation = initialLocation.filter(
        l => l.LocationID === candidate.area_id
      )

      return candidateParty.length > 0 && candidateLocation.length > 0 ? {
        ...candidate,
        partyName: candidateParty[0].name,
        location: candidateLocation[0].Location,
      } : { ...candidate, partyName: "", partyPictureUrl: ""};
    });

    const candidateWithSortedScore = candidateWithPartyInfo
      .map((p) => ({ ...p, score: initialScore[p.id] ?? 0 }))
      .sort((a, b) => {
        return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
      });

    setCandidates(candidateWithSortedScore);
  };

  useEffect(() => {
    setCandidateWithParty(candidates)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Score for all candidates</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Score for all candidates</h1>

        <div className={styles.grid}>
          {candidates.map((p, i) => (
            <div className={styles.card} key={i}>
              <Image
                src={p.pictureUrl}
                alt={"party" + p.id}
                width={100}
                height={100}
              />
              <h2>{p.name}</h2>
              <p><strong>Party:</strong> {p.partyName}</p>
              <p><strong>Area:</strong> {p.location}</p>
              <p>
                <strong>Score:</strong> {initialScore[p.id] ?? 0}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const candidates = await getCandidates();
  const party = await getParty();
  const score = await getScoreMP();
  const location = await getPopulationStatistics();

  return {
    props: {
      initialParty: party,
      initialCandidates: candidates,
      initialScore: score,
      initialLocation: location
    }
  }
}

export default Candidate