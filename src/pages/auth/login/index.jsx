import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../api/auth/useLogin";
const Login = () => {
  const { mutate } = useLogin();
  const navigate = useNavigate();

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
        onSubmit={(e) => mutate(e.target[0], e.target[1])}
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
