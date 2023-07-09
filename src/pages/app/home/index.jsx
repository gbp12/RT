import React from "react";
import styles from "../../../styles.module.css";
import { TweetsSection } from "../../../components/TweetsSection";
import NewTweet from "../../../components/NewTweet";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <NewTweet />
    </div>
  );
};

export default Home;
