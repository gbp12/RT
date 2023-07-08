import React from "react";
import styles from "../../../styles.module.css";
import { TweetsSection } from "../../../components/TweetsSection";
import NewTweet from "../../../components/NewTweet";

import useStore from "../../../localStorage/useStore";
const Home = () => {
  const { userName } = useStore();
  console.log("desde el home: ", userName);

  return (
    <div style={{ width: "100%" }}>
      <NewTweet />
    </div>
  );
};

export default Home;
