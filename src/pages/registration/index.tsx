import Head from "next/head";
import KeenTracking from "keen-tracking";
import Image from "next/image";
import styles from "./registration.module.css";

export default function Registration() {
  const client = new KeenTracking({
    projectId: process.env.NEXT_PUBLIC_KEEN_PROJECT_ID as string,
    writeKey: process.env.NEXT_PUBLIC_KEEN_WRITE_KEY as string,
  });

  client
    .recordEvent("purchases", {
      item: "Apples",
      number_of_items: 130,
      user: {
        name: "John Smithsss",
      },
    })
    .then((response) => {
      // handle successful responses
      console.log(response);
    })
    .catch((error) => {
      // handle errors
      console.log(error);
    });

  return (
    <>
      <Head>
        <title>Registration</title>
        <meta name="description" content="Registration" />
      </Head>
      <div
        className={`${styles.background} ${styles.main} ${styles.background}`}
      >
        <input />
      </div>
    </>
  );
}
