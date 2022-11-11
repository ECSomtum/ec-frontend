import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import axios from "axios";
import { useToBeSomethingButNowWeAreJustStranger } from "../../utils/utils";

const Candidate = () => {
	const [party, setParty] = useState([])

	useEffect(() => {
    axios.get("http://localhost:8000/parties")
    .then(response => response.data)
    .then(data => setParty(data))
	.catch(_ => {
		const mockParty = useToBeSomethingButNowWeAreJustStranger()
		setParty(mockParty)
	})
  },[])

	return (
    <div className={styles.container}>
      <Head>
        <title>Score for each candidate</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Score for each candidate</h1>
        
				{party.map(p => 
					<div className={styles.grid} key={p.id}>
						<div className={styles.card}>
							<Image 
								src={p.pictureUrl} 
								alt={"party" + p.id}
								width={100}
								height={100}/>
							<p>อันดับ {p.id}</p>
							<h2>{p.name}</h2>
							<p>คะแนนรวม {Math.floor(100 / p.id)} เสียง</p>
						</div>
					</div>)}
				
      </main>
    </div>
  );
};

export default Candidate;
