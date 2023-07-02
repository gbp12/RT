import React from "react";
import axios from "axios";

const Login = () => {
  /* FIXME: refactor de api */
  const login = async (e) => {
    e.preventDefault();
    var body = { username: e.target[0].value, password: e.target[1].value };
    try {
      const auth = await axios.post("http://localhost:3000/api/v1/login", body);
      localStorage.setItem("jtw", auth.data.token);
      window.location.replace("/");
    } catch (error) {
      alert("Login failed, try again.");
    }
  };

  /* FIXME: utilizar control de formulario previamente definido */
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        height: "50vh",
        width: "100vw",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => login(e)}
      >
        <h3>Login</h3>
        <label>user</label>
        <input type="text" name="username" />
        <label>password</label>
        <input type="password" name="password" />
        <button type="submit">enviar</button>
      </form>
    </main>
  );
};

export default Login;
