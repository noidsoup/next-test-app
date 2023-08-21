import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./processing.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Processing() {
  return (
    <>
      <Head>
        <title>Processing your image</title>
        <meta name="description" content="Processing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p>Processing</p>
      </main>
    </>
  );
}
