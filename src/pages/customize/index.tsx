import React from "react";
import Head from "next/head";
import Filter from "bad-words";
import { useRouter } from "next/router";
import styles from "./Customize.module.css";
import styleUtils from "../../styles/utils.module.css";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";

const Home: React.FC = () => {
  const router = useRouter();

  const filter = new Filter();
  const filterBadWords = (text: string) => {
    console.log(filter.isProfane(""));
    return filter.clean(text);
  };

  const handleStartClick = () => {
    router.push("/upload");
  };
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSelectChange = (value: any) => {
    // set context here with value
    console.log(value);
  };

  return (
    <>
      <Head>
        <title>Customize</title>
      </Head>
      <div className={`${styles.background} ${styles.main}`}>
        <h2>Personalize</h2>
        <h2>Your Video</h2>
        <p>Lorem Ipsum</p>
        <Select options={options} onChange={handleSelectChange} />
        <Button secondaryBlue onClick={handleStartClick}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Home;
