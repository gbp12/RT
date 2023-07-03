import React from "react";
import { useCustomFetch } from "../../../hooks/useCustomQuerys";
import styles from "../../../styles.module.css";
import { Header } from "../../../components/Header";
import { TweetsSection } from "../../../components/TweetsSection";
import NewTweet from "../../../components/NewTweet";
import { useLocation } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      {/*      <TweetsSection />*/}
      <NewTweet />
    </div>
  );
};

export default Home;
