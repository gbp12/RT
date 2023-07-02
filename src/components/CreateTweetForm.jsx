import React, { useState } from "react";
import { useCustomFetch } from "../hooks/useCustomQuerys";
import { useMutation } from "react-query";
import axios from "axios";
export const CreateTweetForm = () => {
  const [tweets, setTweets] = useState([]);
  console.log(
    "🚀 ~ file: CreateTweetForm.jsx:7 ~ CreateTweetForm ~ tweets:",
    tweets
  );
  console.log(tweets.length > 0);
  const mutation = useMutation(async (query) => {
    if (query.action === "create") {
      const post = await axios.post(
        "http://localhost:3000/api/v1/tweets/create",
        query,
        {
          headers: {
            authorization: `${localStorage.getItem("jtw")}`,
          },
        }
      );
      mutation.mutate({ action: "get" });
      return post;
    } else if (query.action === "delete") {
      console.log(query.id);
      const post = await axios.delete(
        `http://localhost:3000/api/v1/tweets/delete/${query.id}`,
        { headers: { authorization: `${localStorage.getItem("jtw")}` } }
      );
      mutation.mutate({ action: "get" });
      return post;
    } else if (query.action === "get") {
      const post = await axios.get("http://localhost:3000/api/v1/tweets", {
        headers: {
          authorization: `${localStorage.getItem("jtw")}`,
        },
      });
      setTweets(post.data.data);
      return post;
    }
  });
  const login = async (e) => {
    e.preventDefault();
    var body = { username: e.target[0].value, password: e.target[1].value };
    try {
      const auth = (
        await axios.post("http://localhost:3000/api/v1/login", body)
      ).data.token;
      localStorage.setItem("jtw", auth);
      console.log("🚀 ~ file: CreateTweetForm.jsx:38 ~ login ~ auth:", auth);
      alert("Login succesful");
    } catch (error) {
      alert("Login failed");
    }
  };
  const crearTweet = (e) => {
    e.preventDefault();
    var query = { texto: e.target[0].value, action: "create" };
    mutation.mutate(query);
  };
  const eliminarTweet = (e) => {
    e.preventDefault();
    var query = { id: e.target[0].value, action: "delete" };
    mutation.mutate(query);
  };
  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => login(e)}
      >
        <h3>Login</h3>
        <label>user</label>
        <input type="text" name="username" />
        <label>password</label>
        <input type="text" name="password" />
        <button type="submit">enviar</button>
      </form>
      <div
        style={{
          display: "flex",
          width: "50vw",
          justifyContent: "space-around",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => crearTweet(e)}
        >
          <h3>Crear Tuit</h3>
          <input />
          <button type="submit">enviar</button>
        </form>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => eliminarTweet(e)}
        >
          <h3>ELiminar Tuit</h3>
          <input />
          <button type="submit">enviar</button>
        </form>
      </div>
      <h1>Llamar Tweets</h1>
      <button
        onClick={() => {
          mutation.mutate({ action: "get" });
        }}
      >
        llamar
      </button>
      {tweets.length > 0
        ? tweets.map((tweet) => {
            return (
              <div key={tweet.id}>
                <h3>
                  {tweet.id}: {tweet.texto}
                </h3>
              </div>
            );
          })
        : null}
    </>
  );
};
