import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import InfoCandidate from "./InfoCandidate";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>รับชมผลการเลือกตั้งที่น่าสนใจ</title>
        <meta name="description" content="my web yey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Live Election Dashboard</h1>

        <p className={styles.description}>
          Find different election dashboards below
        </p>

        <div className={styles.grid}>
          <Link href="/charts/party" className={styles.card}>
            <h2>Score for each party &rarr;</h2>
          </Link>

          <Link href="/InfoCandidate" className={styles.card}>
            <h2>Candidate Information &rarr;</h2>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>More dashboard coming soon &rarr;</h2>
            <p>Stay tuned</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>More dashboard coming soon &rarr;</h2>
            <p>Stay tuned</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
