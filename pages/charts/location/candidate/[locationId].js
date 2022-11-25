import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../../../styles/Party.module.css";
import Image from "next/image";
import {
  getCandidateScoreArea,
  getCandidatesByArea,
  getPopulationStatistics,
  getParty,
} from "../../../../services/ec";

const AllVoteArea = ({
  initialScore,
  initialCandidates,
  initialLocStat,
  initialParty,
}) => {
  const router = useRouter();
  const { locationId } = router.query;
  const location = initialLocStat.find((l) => l.LocationID == locationId);

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

  useEffect(() => {
    console.log(initialScore);
    console.log(Object.keys(initialScore).length === 0);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Score of each party in {location.Location}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Area {location.Location}</h1>

        <div className={styles.grid}>
          {Object.keys(initialScore).length !== 0 ? (
            candidateWithPartyInfo.map((p) => (
              <div className={styles.card} key={p.id}>
                <Image
                  src={p.pictureUrl}
                  alt={"party" + p.id}
                  width={100}
                  height={100}
                />
                <h2>{p.name}</h2>
                <p><strong>Party: </strong>{p.partyName}</p>
                <p><strong>Score:</strong> {initialScore[p.id] ?? 0}</p>
              </div>
            ))
          ) : (
            <h2>No vote yet</h2>
          )}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const areaScore = await getCandidateScoreArea(context.params.locationId);
  const candidates = await getCandidatesByArea(context.params.locationId);
  const locationStatistic = await getPopulationStatistics();
  const party = await getParty();

  return {
    props: {
      initialScore: areaScore,
      initialCandidates: candidates,
      initialLocStat: locationStatistic,
      initialParty: party,
    },
  };
}

export default AllVoteArea;
