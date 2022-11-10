import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Candidate = () => {
	const data = {
		labels: ["Score"],
		datasets: [{
			label: "ชัชชาติ",
			data: [1000],
		},
		{
			label: "ตู่ๆ",
			data: [11],
		}
	]
	}

	const options = {
		responsive: true
	}

  return (
    <div className={styles.container}>
      <Head>
        <title>Score for each candidate</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Score for each candidate</h1>
        
				{[...Array(10).keys()].map(i => i + 1).map(i => 
					<div className={styles.grid} key={i}>
						<div className={styles.card}>
							<Image 
								src="https://ih1.redbubble.net/image.430094232.0384/flat,800x800,075,f.u2.jpg" 
								alt="Dog"
								width={100}
								height={100}/>
							<p>อันดับ {i}</p>
							<h2>พรรคหมา</h2>
							<p>คะแนนรวม {Math.floor(100 / i)} เสียง</p>
						</div>
					</div>)}
				
      </main>
    </div>
  );
};

export default Candidate;
