import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Welcome.module.css";
import styleUtils from "../styles/utils.module.css";
import Button from "../components/Button/Button";

const Home: React.FC = () => {
  const router = useRouter();

  const handleStartClick = () => {
    router.push("/customize");
  };

  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Welcome" />
      </Head>
      <div className={`${styles.background} ${styles.main}`}>
        <div className={`${styles.placeholderLogo}`}></div>
        <Button onClick={handleStartClick}>Start</Button>
      </div>
    </>
  );
};

export default Home;
