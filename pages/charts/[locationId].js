import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import axios from "axios";
import Link from 'next/link'
import { WhoCaresAboutNamingThingsBro } from "../../utils/utils";
import { LocationNaja } from "../../utils/utils";
import { CircularProgress } from "@mui/material";
const num = Math.random(1,4)

const MostVoted = () => {
  const [party, setParty] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  const locationId = router.query.locationId
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
        <title>ผู้มีคะแนนโหวตสูงสุดของเขตที่{locationId}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ผู้มีคะแนนโหวตสูงสุดของเขตที่{locationId}</h1>

        {party.map((p) => (
          <div className={styles.grid} key={p[2].id}>
            <div className={styles.card}>
              <Image
                src={p.pictureUrl}
                alt={"party" + p.id}
                width={100}
                height={100}
              />
              <p>อันดับ {p.id}</p>
              <h2>{p.name}</h2>
              <p>คะแนนรวม {Math.round(Math.random()*100)} เสียง</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MostVoted