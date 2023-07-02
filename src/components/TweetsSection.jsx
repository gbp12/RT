import React, { useState, useEffect } from "react";
import style from "../styles.module.css";
import { useCustomFetch } from "../hooks/useCustomQuerys";
import axios from "axios";

export const TweetsSection = () => {
  /* FIXME: refactorizar api functions  */

  const [tweetCount, setTweetCount] = useState(0);
  const [tweets, setTweets] = useState([]);

  const { data, isLoading, isError } = useCustomFetch(
    "allTweets",
    `http://localhost:3000/api/v1/tweets/${tweetCount}`
  );

  useEffect(() => {
    if (data) {
      setTweets(data.data.data);
    }
  }, [data]);
  const masTweets = async (e) => {
    e.preventDefault();
    const moreTweets = await axios.get(
      `http://localhost:3000/api/v1/tweets/${tweetCount + 10}`,
      {
        headers: {
          authorization: `${localStorage.getItem("jtw")}`,
        },
      }
    );
    setTweets([...tweets, ...moreTweets.data.data]);
    setTweetCount(tweetCount + 10);
  };

  /* FIXME: logica de isLoading y isError debe ser modular */
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  /* FIXME: Crear component  */
  return (
    <div className={style.container}>
      {tweets.map((tweet) => {
        return (
          <div className={style.tweet} key={tweet.id}>
            <div className={style.userName}> {tweet.username} </div>
            <div className={style.tweetText}>{tweet.texto}</div>
          </div>
        );
      })}
      <a onClick={(e) => masTweets(e)} className={style.loadTweets}>
        ver más
      </a>
    </div>
  );
};
