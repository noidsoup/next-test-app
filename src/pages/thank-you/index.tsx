import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./thank-you.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You!</title>
        <meta name="description" content="Thank You!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.background} ${styles.main}`}>
        <p>Thank You!</p>
      </div>
    </>
  );
}
