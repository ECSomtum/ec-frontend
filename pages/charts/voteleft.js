import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/Party.module.css";
import Image from "next/image";
import { getPopulationStatistics } from "../../services/ec";

const VoteLeft = ({ initialLocStat }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Number of people vote in all area</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Number of people vote in all area</h1>

        <div className={styles.grid}>
          {initialLocStat.map((l) => (
            <div className={styles.card} key={l.id}>
              <p>Area {l.LocationID}</p>
              <h2>{l.Location}</h2>
              <h3>Total people in area: {l.TotalPeople}</h3>
              <h3>Number of people not voted left: {l.TotalPeople - l.PeopleCommitTheVote}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const locationStatistic = await getPopulationStatistics();

  return {
    props: {
      initialLocStat: locationStatistic,
    },
  };
}

export default VoteLeft;
