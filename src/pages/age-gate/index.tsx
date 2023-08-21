import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./age-gate.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function AgeGate() {
  return (
    <>
      <Head>
        <title>Are you at least 18 years old?</title>
        <meta name="description" content="Age Gate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p>Are you at least 18 years old?</p>
      </main>
    </>
  );
}
